import pool from '../utils/db';
import { Job } from '../types/job';

export const createJob = async (job: Job): Promise<number> => {
  const [result] = await pool.execute(
    'INSERT INTO jobs (title, company, location, salary, description) VALUES (?, ?, ?, ?, ?)',
    [job.title, job.company, job.location, job.salary, job.description]
  );
  return (result as any).insertId;
};

export const getJobs = async (page: number, limit: number): Promise<Job[]> => {
  const offset = (page - 1) * limit;
  const [rows] = await pool.query('SELECT * FROM jobs LIMIT ? OFFSET ?', [limit, offset]);
  return rows as Job[];
};

export const getJobById = async (id: number): Promise<Job | null> => {
  const [rows] = await pool.query('SELECT * FROM jobs WHERE id = ?', [id]);
  return (rows as Job[])[0] || null;
};

export const updateJob = async (id: number, job: Job): Promise<void> => {
  await pool.execute(
    'UPDATE jobs SET title = ?, company = ?, location = ?, salary = ?, description = ? WHERE id = ?',
    [job.title, job.company, job.location, job.salary, job.description, id]
  );
};

export const deleteJob = async (id: number): Promise<void> => {
  await pool.execute('DELETE FROM jobs WHERE id = ?', [id]);
};