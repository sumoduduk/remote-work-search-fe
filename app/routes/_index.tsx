import {
  ClientLoaderFunctionArgs,
  Form,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { findJob } from "~/lib/findJob";
import CardJob from "~/components/card-job";
import { Dialog, DialogContent } from "~/components/ui/dialog";
import Spinner from "~/components/spinner";
import { JobType, LoaderHomeType } from "~/types/all";
import { MetaFunction } from "@remix-run/node";

export const clientLoader = async ({ request }: ClientLoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchAllParams = url.searchParams;
  const keyword = searchAllParams.get("keyword");

  let dataJob: JobType[] = [];

  if (keyword) {
    const data = await findJob(keyword);
    dataJob = data;
  }

  return { keyword, dataJob };
};

export const meta: MetaFunction = () => {
  return [
    { title: "Remote Work Finder" },
    {
      name: "description",
      content: "Website is for user to find they desired remote worker",
    },
    { name: "author", content: "Iqbal Abdurachman" },
    {
      name: "keywords",
      content: "remote work, designer job, remote job, USA job",
    },
  ];
};

export const Index = () => {
  const { keyword, dataJob } = useLoaderData() as LoaderHomeType;
  const navigation = useNavigation();

  const isLoading =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("keyword");

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
      <Dialog open={isLoading}>
        <DialogContent>
          <div className="p-40">
            <Spinner />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Index;
