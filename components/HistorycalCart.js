import { FORM_CONTEXT } from "@/context/FormProvider/FormProvider";
import { getCountryCode } from "@/localStroge/localStroge";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  BarChart,
  AreaChart,
} from "recharts";

const HistorycalCart = ({ startDate, endDate }) => {
  const [historyData, setHistorycalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state } = useContext(FORM_CONTEXT);
  const { fromContary, toContary } = state;
  const [getCountry, setGetCountry] = useState("");


  useEffect(() => {
  
    // ----------- Get localStroge country code
    setGetCountry(getCountryCode());

    // -------- This api call for get currency time series
    fetch(
      `https://api.exchangerate.host/timeseries?start_date=${startDate}&end_date=${endDate}&base=${fromContary}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        if (data.success) {
          setHistorycalData(data);
        }
        setLoading(false);
      });

  }, [fromContary, startDate, endDate]);

  if (loading) return <h1 className="text-center mt-40 text-white">Loading</h1>;

  // --------- Convert the time serise object an array
  const historyDataList = [];
  if (historyData) {
    for (const key in historyData.rates) {
      historyDataList.push({
        [toContary || getCountry]:
          historyData.rates[key][toContary || getCountry],
        date: key,
      });
    }
  }

 


  // const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div>

      <AreaChart
        width={600}
        height={300}
        data={historyDataList}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="0 1" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Area dataKey={toContary || getCountry} fill="#82ca9d" />
      </AreaChart>
    </div>
  );
};

export default HistorycalCart;
