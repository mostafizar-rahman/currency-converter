import ConverterForm from "@/components/ConverterForm";
import ConverterFormByDate from "@/components/ConverterFormByDate";
import DatePicker from "@/components/DatePicker";
import HistorycalCart from "@/components/HistorycalCart";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const historyDetails = () => {
  const { query } = useRouter();

  
 
  return (
    <div className="mt-32 max-w-[1300px] mx-auto px-4">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div>
          {/* <ConverterFormByDate symbols={query.id} base={"USD"} /> */}
          <ConverterForm symbols={query.id} base={"USD"} />
        </div>
        <div>
          {/* <HistorycalCart symbols={query.id} base={"USD"}/> */}
          <DatePicker />
        </div>
      </div>
    </div>
  );
};

export default historyDetails;
