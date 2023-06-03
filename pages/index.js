import ConverterForm from "@/components/ConverterForm";
import HomeStyle from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={`${HomeStyle.homeBg}`}>
      <div className="max-w-[1100px] w-full mt-16 mx-auto px-4 md:pt-24 pt-10 pb-5 md:pb-0 flex md:flex-row flex-col gap-4 items-center justify-between">
        <div className="lg:max-w-lg max-w-md">
          <h3 className="font-bold md:text-3xl text-2xl">
            "Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver." -{" "}
            <span className="text-sm">Ayn Rand</span>
          </h3>
          <p className="mt-3">
            Money is a tool that can help us achieve our goals, whether they be
            personal or professional. It is important to use money wisely and
            ensure that it is used in a way that aligns with our values and
            priorities.
          </p>
        </div>
        <div className=" mt-14">
          <ConverterForm />
        </div>
       
      </div>
    </div>
  );
};

export default Home;
