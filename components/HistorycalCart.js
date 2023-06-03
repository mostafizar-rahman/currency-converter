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

const HistorycalCart = ({ startDate }) => {
  const [timeSeriseData, setTimeSeriseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state } = useContext(FORM_CONTEXT);
  const { fromContary, toContary } = state;
  const [countryCodeFromLocalstroge, setCountryCodeFromLocalstroge] =
    useState("");

  useEffect(() => {
    // ----------- Get localStroge country code
    setCountryCodeFromLocalstroge(getCountryCode());

    // -------- This api call for get currency time series

    const url = `https://api.exchangerate.host/timeseries?start_date=${startDate}&end_date=2023-06-01&base=${fromContary}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        if (data.success) {
          setTimeSeriseData(data);
        }
        setLoading(false);
      });
  }, [fromContary, startDate]);

  if (loading) return <h1 className="text-center mt-40 text-white">Loading</h1>;

  // --------- Convert the time serise object an array
  const timeSeriseLists = [];
  if (timeSeriseData) {
    for (const key in timeSeriseData.rates) {
      timeSeriseLists.push({
        [toContary || countryCodeFromLocalstroge]:
          timeSeriseData.rates[key][toContary || countryCodeFromLocalstroge],
        date: key,
      });
    }
  }

  // const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="w-full">
      {/* <ResponsiveContainer> */}
      <AreaChart
        width={600}
        height={300}
        data={timeSeriseLists}
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

        <Area
          dataKey={toContary || countryCodeFromLocalstroge}
          fill="#82ca9d"
        />
      </AreaChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default HistorycalCart;
