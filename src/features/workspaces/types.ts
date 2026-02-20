export interface Workspace {
  id: string;
  slug: string;
  name: string;
  description: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkspaceDTO {
  slug: string;
  name: string;
  description?: string;
  userId: string;
}

