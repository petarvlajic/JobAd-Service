export interface JobAd {
  id: number;
  title: string;
  description: string;
  skills: string[];
  status: JobAdStatus;
}

export interface updateJobAd {
  id?: number;
  title?: string;
  description?: string;
  skills?: string[];
  status?: JobAdStatus;
}

export type JobAdStatus = 'draft' | 'published' | 'archived';
