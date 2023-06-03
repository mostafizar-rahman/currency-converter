import useCountries from "@/hooks/useCountries";
import Link from "next/link";
import HistoryStyle from "../../styles/History.module.css";
import { useState } from "react";

const History = () => {
  const countriesList = useCountries();
  const [searchingCountryList, setSearchingCountryList] = useState([]);

  // -------------- Searching country by character
  const handleSearchCountryByCharacter = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      return setSearchingCountryList([]);
    }
    const filteredCountry = countriesList.filter((country) =>
      country.description.toLowerCase().includes(value)
    );
    setSearchingCountryList(filteredCountry);
  };

  // console.log(searchingCountryList)
  // -------------- Search country by full name
  const handleSearchCountryByName = () => {};

  return (
    <section className=" mt-16 relative">
      {/* -------------- Search bar */}
      <div className="relative w-[300px] my-3 mt-[70px] mx-auto ">
        <input
          type="search"
          placeholder="Search Country"
          className="px-2 py-2 rounded-full min-w-[300px] relative"
          defaultValue={searchingCountryList}
          onChange={handleSearchCountryByCharacter}
        />
        <button
          onClick={handleSearchCountryByName}
          className="btn bg-[#20e04a] rounded-full px-5 py-1 absolute right-2 top-1/2 -translate-y-1/2"
        >
          Search
        </button>
      </div>

      {/* ------------- Country List as a table */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 max-w-[1300px] mx-auto px-4  ${HistoryStyle.bor}`}
      >
        {countriesList.map((e, index) => {
          return (
            <div key={index} className="">
              <Link
                className="block  h-14 py-2 text-center text-sm md:text-base hover:bg-[#20e04a]"
                href={`/history/${e.code}`}
              >
                {e.description}
              </Link>
            </div>
          );
        })}
      </div>

      {/* --------------- Search Result Display  Modal ---------- */}
      <div
        className={`absolute top-11 left-1/2 -translate-x-1/2  max-w-md w-full min-h-[100px] bg-[#20e04a] rounded-lg  ${
          searchingCountryList.length ? "visible" : "hidden"
        }`}
      >
        <div className="grid grid-cols-2">
          {searchingCountryList?.map((e, index) => {
            return (
              <div key={index} className="">
                <Link
                  className="block  h-14 py-2 text-center text-sm md:text-base hover:bg-[#20e04a]"
                  href={`/history/${e.code}`}
                >
                  {e.description}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default History;
