import { useContext, useEffect, useState } from "react";
import useCountries from "@/hooks/useCountries";
import { actionTypes } from "@/context/ActionTypes/ActionTypes";
import { FORM_CONTEXT } from "@/context/FormProvider/FormProvider";

const ConverterFormByDate = ({ symbols, base }) => {
  const [resultAmount, setResultAmount] = useState(0);
  const countriesList = useCountries();
  const { dispatch, state } = useContext(FORM_CONTEXT);

 
  //
  useEffect(() => {
    dispatch({
      type: actionTypes.FROM_CONTARY_NAME,
      payload: symbols,
    });

    dispatch({
      type: actionTypes.TO_CONTARY_NAME,
      payload: base,
    })
  }, []);

  const handleConvertFormSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div className="py-6 px-3 bg-white w-96 rounded-lg min-h-[300px] flex flex-col justify-center ">
      <h3 className="text-black text-2xl font-bold mb-4">Calclute</h3>
      <form onSubmit={handleConvertFormSubmit}>
        <div>
          <p className="text-black">From</p>
          <select
            value={state.fromContary || symbols}
            onChange={(e) =>
              dispatch({
                type: actionTypes.FROM_CONTARY_NAME,
                payload: e.target.value,
              })
            }
            className="py-4 outline-none rounded-lg w-full"
          >
            <option value="default">Select Country</option>
            {countriesList.map((country) => {
              return (
                <option key={country.code} value={country.code}>
                  {country.description}
                </option>
              );
            })}
          </select>
          <input
            type="number"
            placeholder="Enter Your Amount"
            className="py-4 outline-none rounded-lg w-full px-2 mt-3"
            onChange={(e) =>
              dispatch({
                type: actionTypes.FROM_AMOUNT,
                payload: e.target.value,
              })
            }
          />
        </div>
        <div>
          <p className="text-black mt-5">To</p>
          <select
            value={state.toContary || base}
            onChange={(e) =>
              dispatch({
                type: actionTypes.TO_CONTARY_NAME,
                payload: e.target.value,
              })
            }
            className="py-4 outline-none rounded-lg w-full"
          >
            <option value="default">Select Country</option>
            {countriesList.map((country) => {
              return (
                <option key={country.code} value={country.code}>
                  {country.description}
                </option>
              );
            })}
          </select>
          <div className=" mt-3 flex gap-5">
            <input
              type="number"
              name=""
              id=""
              className="w-full py-4 outline-none rounded-lg px-2 "
              placeholder="Year"
              onChange={handleYear}
            />

            <input
              type="number"
              name=""
              id=""
              className="w-full py-4 outline-none rounded-lg px-2 "
              placeholder="Month"
              onChange={handleMonth}
            />

            <input
              type="number"
              name=""
              id=""
              className="w-full py-4 outline-none rounded-lg px-2 "
              placeholder="Date"
              onChange={handleDate}
            />
          </div>
          <input
            readOnly
            type="text"
            placeholder="Enter Your Amount"
            className="py-4 outline-none rounded-lg w-full px-2 mt-3"
            defaultValue={resultAmount.result}
          />
        </div>
        <button className="text-black btn px-4 py-2 bg-indigo-500 rounded-lg mt-3 w-full">
          Convert
        </button>
      </form>
    </div>
  );
};

export default ConverterFormByDate;
