import { LoaderFunctionArgs } from "react-router-dom";

export const loader = ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchParamsAll = url.searchParams;
  console.log({ searchParamsAll });
  return null;
};

const SearchComponents = () => {
  return <div>SearchComponents</div>;
};

export default SearchComponents;
