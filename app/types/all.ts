export type JobType = {
  link: string;
  price: string;
  title: string;
};

export type LoaderHomeType = {
  keyword: string;
  dataJob: JobType[];
};
