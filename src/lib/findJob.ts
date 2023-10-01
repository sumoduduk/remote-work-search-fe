const URI_BACKEND = import.meta.env.VITE_BE_URI as string;

export async function findJob(keyword: string) {
  const url = URI_BACKEND + keyword;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
