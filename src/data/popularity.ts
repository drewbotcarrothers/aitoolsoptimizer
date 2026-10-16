import pop from './tool-popularity.json';
const scores = pop.scores as Record<string, number>;
export const popularityUpdated = pop.updated;
export const popularitySource = pop.source;
/** Highest search interest first; tools without data last; ties by name. */
export function byPopularity(a: { id: string; data: { name: string } }, b: { id: string; data: { name: string } }) {
  return (scores[b.id] ?? -1) - (scores[a.id] ?? -1) || a.data.name.localeCompare(b.data.name);
}
