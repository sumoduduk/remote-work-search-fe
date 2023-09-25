const URI_BACKEND = import.meta.env.VITE_BE_URI as string;

const job = [
  {
    link: "http://example.com",
    price: "Budget : $100",
    title: "Single landing page design to Tailwind CSS ",
  },
  {
    link: "http://example.com",
    price: "Hourly Range : $100 - $200",
    title: "Wordpress designer",
  },
  {
    link: "http://example.com",
    price: "Budget : $100",
    title: "Need prompt engineer",
  },
];

export async function findJob(keyword: string) {
  const url = URI_BACKEND + keyword;
  console.log({ url });
  const response = await fetch(url);
  const data = await response.json();
  return data;

  // return job;
}
