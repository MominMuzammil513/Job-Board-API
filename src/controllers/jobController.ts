import { NextFunction, Request, Response } from 'express';
import * as jobModel from '../models/job';
import { Job } from '../types/job';
import { generateToken } from '../utils/auth';

export const createJob = async (req: Request, res: Response, next?: NextFunction) => {
    try {
      const job: Job = req.body;
      const jobId = await jobModel.createJob(job);
      res.status(201).json({ id: jobId, ...job });
    } catch (error) {
      if (next) {
        next(error); // Pass the error to the error handler middleware
      } else {
        res.status(500).json({ message: 'Error creating job' });
      }
    }
  };

export const getJobs = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const jobs: Job[] = await jobModel.getJobs(page, limit);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs' });
  }
};

export const getJobById = async (req: Request, res: Response) => {
  try {
    const jobId: number = parseInt(req.params.id);
    const job: Job | null = await jobModel.getJobById(jobId);
    if (job) {
      res.status(200).json(job);
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job' });
  }
};

export const deleteJob = async (req: Request, res: Response) => {
    try {
      const jobId: number = parseInt(req.params.id);
      const job = await jobModel.getJobById(jobId);
      if (!job) {
        res.status(404).json({ message: 'Job not found' });
        return;  // Explicitly return void
      }
      await jobModel.deleteJob(jobId);
      res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting job' });
    }
  };
  
  export const updateJob = async (req: Request, res: Response) => {
    try {
      const jobId: number = parseInt(req.params.id);
      const job = await jobModel.getJobById(jobId);
      if (!job) {
        res.status(404).json({ message: 'Job not found' });
        return;  // Explicitly return void
      }
      await jobModel.updateJob(jobId, req.body);
      res.status(200).json({ message: 'Job updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error updating job' });
    }
  };
// export const loginUser = async (req:Request, res:Response) => {
//     const {userId} = req.body
//     if (!userId) {
//         return res.status(400).json({ message: 'User ID is required' });
//       }
//       const token = generateToken(userId);
//       res.status(200).json({ token });
// }

  