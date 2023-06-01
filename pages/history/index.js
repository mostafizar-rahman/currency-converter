import useCountries from "@/hooks/useCountries";
import Link from "next/link";

import HistoryStyle from "../../styles/History.module.css";
import { useRouter } from "next/router";
const History = () => {
  const countriesList = useCountries();
  const router = useRouter();
  // console.log(router)
  // router.replace(router.asPath);

  return (
    <div className=" mt-16">
      <div className="relative w-[300px] my-3 mt-[70px] mx-auto ">
        <input
          type="search"
          placeholder="Search Country"
          className="px-2 py-2 rounded-full md:min-w-[300px] relative"
        />
        <button className="btn bg-[#20e04a] rounded-full px-5 py-1 absolute right-2 top-1/2 -translate-y-1/2">
          Search
        </button>
      </div>

      <div
        className={`grid grid-cols-6 max-w-[1300px] mx-auto px-4  ${HistoryStyle.bor}`}
      >
        {countriesList.map((e, index) => {
          return (
            <div key={index} className="">
              <Link
                className="block  h-14 py-2 text-center hover:bg-[#20e04a]"
                href={`/history/${e.code}`}
              >
                {e.description}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
