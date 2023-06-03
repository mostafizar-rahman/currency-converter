import ConverterForm from "@/components/ConverterForm";
import DatePicker from "@/components/DatePicker";
import HistorycalCart from "@/components/HistorycalCart";
import LatestPrice from "@/components/LatestPrice";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const historyDetails = () => {

  const { query } = useRouter();

  
 
  return (
    <section className="mt-32 max-w-[1300px] mx-auto px-4">
      <div className="flex lg:flex-row flex-col justify-between items-center">
        <div>
          <ConverterForm countryCode={query.id} />
        </div>
        <div>
          {/* <HistorycalCart symbols={query.id} base={"USD"}/> */}
          <DatePicker countryCode={query.id}/>
        </div>
      </div>
      <LatestPrice/>
    </section>
  );
};


export default historyDetails;
