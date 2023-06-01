import React from "react";

const Footer = () => {
  return (
    <footer className=" mt-32 pb-12">
        <p className="border-t border-t-[#323232]"></p>
      <div className="mt-8">
        <ul className="flex gap-4 justify-center">
            <li className="w-10 h-10 rounded-full bg-slate-800"><a href=""></a></li>
            <li className="w-10 h-10 rounded-full bg-slate-800"><a href=""></a></li>
            <li className="w-10 h-10 rounded-full bg-slate-800"><a href=""></a></li>
            <li className="w-10 h-10 rounded-full bg-slate-800"><a href=""></a></li>
            <li className="w-10 h-10 rounded-full bg-slate-800"><a href=""></a></li>
        </ul>
        <i className="text-center mt-4 block">CopyRight <a href="" className="text-[#20e04ad5] underline">Mostafizar</a></i>
      </div>
    </footer>
  );
};

export default Footer;
