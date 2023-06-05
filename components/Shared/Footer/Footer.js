import Image from "next/image";
import React from "react";
import facebook from "../../../asstes/icon/facebook.png";
import twitter from "../../../asstes/icon/twitter.png";
import github from "../../../asstes/icon/github.png";
import linkedin from "../../../asstes/icon/linkedin.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" mt-32 pb-12">
      <p className="border-t border-t-[#323232]"></p>
      <div className="mt-8">
        <ul className="flex gap-4 justify-center">
          <li className="w-10 h-10 rounded-full bg-slate-800 flex justify-center items-center">
            <Link href="https://web.facebook.com/profile.php?id=100008522538788">
              <Image src={facebook} />
            </Link>
          </li>
          <li className="w-10 h-10 rounded-full bg-slate-800 flex justify-center items-center">
            <Link href="https://twitter.com/MDMOSTA23184912">
              <Image src={twitter} />
            </Link>
          </li>
          <li className="w-10 h-10 rounded-full bg-slate-800 flex justify-center items-center">
            <Link href="https://www.linkedin.com/in/dev-mostafizar/">
              <Image src={linkedin} />
            </Link>
          </li>
          <li className="w-10 h-10 rounded-full bg-slate-800 flex justify-center items-center">
            <Link href="https://github.com/mostafizar-rahman">
              <Image src={github} />
            </Link>
          </li>
        </ul>
        <i className="text-center mt-4 block">
          CopyRight{" "}
          <Link
            href="https://mostafizar.netlify.app/"
            className="text-[#20e04ad5] underline"
          >
            Mostafizar
          </Link>
        </i>
      </div>
    </footer>
  );
};

export default Footer;
