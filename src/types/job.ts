export interface Job {
    id?: number;
    title: string;
    company: string;
    location: string;
    salary?: number;
    description?: string;
    created_at?: string;
    updated_at?: string;
  }