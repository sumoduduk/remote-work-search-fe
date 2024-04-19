import { JobType } from "~/types/all";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ClipboardIcon, LinkIcon } from "lucide-react";

type CardType = {
  job: JobType;
  cate: string;
};

const CardJob = ({ job, cate }: CardType) => {
  const handleCopy = () => {
    const url_part = job.link.split("/");
    const last_part = url_part[url_part.length - 1];

    const new_url = `https://abdurachmaniqbal.my.id/job?search=${last_part}`;
    navigator.clipboard.writeText(
      `🏢 Job Category : ${cate.toUpperCase()}  \n💼 ${job.title}\n \n💰 ${job.price}\n \n🔗 ${new_url}`,
    );
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row justify-between items-start gap-4">
        <div className="space-y-1 mt-3">
          <CardTitle>{job.price}</CardTitle>
        </div>
        <button
          onClick={handleCopy}
          className="bg-secondary p-3 rounded-lg hover:scale-110 active:scale-90 ease-in-out duration-200"
        >
          <ClipboardIcon className="h-4 w-4" />
        </button>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{job.title}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex space-x-1 items-center text-sm text-muted-foreground">
          <div className="flex items-center space-x-3">
            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Go To Site
            </a>
            <LinkIcon className="h-3 w-3 mr-2" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardJob;
