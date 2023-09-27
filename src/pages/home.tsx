import { Form, LoaderFunction, useLoaderData } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { findJob } from "@/lib/findJob";
import CardJob from "@/components/card-job";

export type JobType = {
  link: string;
  price: string;
  title: string;
};

type LoaderHomeType = {
  keyword: string;
  dataJob: JobType[];
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchAllParams = url.searchParams;
  const keyword = searchAllParams.get("keyword");
  console.log("keyword in loader", keyword);

  let dataJob: JobType[] = [];

  if (keyword) {
    const data = await findJob(keyword);
    dataJob = data;
  }

  return { keyword, dataJob };
};

export const Home = () => {
  const { keyword, dataJob } = useLoaderData() as LoaderHomeType;

  console.log({ dataJob });
  console.log("data job len", dataJob.length);

  return (
    <section className="flex container py-2 flex-col flex-grow gap-16 items-center px-4 md:px-32">
      <Form
        className="w-full flex gap-4 items-center"
        id="search-form"
        role="search"
      >
        <Input
          id="keyword"
          name="keyword"
          type="text"
          placeholder="Enter keyword"
          aria-label="search keyword"
          autoComplete="off"
          className="w-1/2"
          defaultValue={keyword}
        />
        <Button type="submit">Find</Button>
      </Form>
      {dataJob.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {dataJob.map((elm, i) => (
            <CardJob key={i} job={elm} />
          ))}
        </div>
      )}
    </section>
  );
};
