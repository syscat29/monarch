'use server';

import { prisma } from '@/lib/prisma';
import { WorkspaceDTO } from './types';
import generateShortcode from '@/lib/generateShortcode';

// Create workspace
export async function createWorkspace(data: WorkspaceDTO) {
  const slug = generateShortcode();

  try {
    const workspace = await prisma.workspace.create({ data: { ...data, slug } });
    console.log('Workspace created:', workspace);

    return workspace;
  } catch (error) {
    console.error('Error creating workspace:', error);
    throw error;
  }
}
