import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env'; // Ensure this path is correct

export const client = createClient({
  projectId: projectId, // Make sure this value is correct
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true, // Optional: Set to false if you want real-time updates
});
