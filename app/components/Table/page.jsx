import Searchbar from "./Searchbar";
import CallsTable from "./CallsTable";

const getcallsdata = async () => {
  try {
    const res = await fetch(
      `https://nextjs-mongodb-virid.vercel.app/api/calls`,
      {
        cache: "no-store",
      }
    );
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const Page = async () => {
  const calls = await getcallsdata();
  return (
    <div>
      <Searchbar />
      <CallsTable calls={calls?.calls} />
    </div>
  );
};

export default Page;
