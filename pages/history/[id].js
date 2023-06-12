import ConverterForm from "@/components/ConverterForm";
import DatePicker from "@/components/DatePicker";
import LatestPrice from "@/components/LatestPrice";

const historyDetails = () => {
 
  return (
    <section className="mt-32 max-w-[1300px] mx-auto px-4">
      <div className="flex lg:flex-row flex-col justify-between items-center">
        <div>
          <ConverterForm  />
        </div>
        <div>
          <DatePicker />
        </div>
      </div>
      <LatestPrice/>
    </section>
  );
};


export default historyDetails;
