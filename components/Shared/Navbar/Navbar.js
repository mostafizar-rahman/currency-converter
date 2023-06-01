import Link from "next/link";

const Navbar = () => {

  return (
    <>
      <nav className="h-16 w-full top-0 z-50 bg-[#20e04ae4] fixed">
        <div className="max-w-[1300px] w-full px-4 mx-auto flex items-center justify-between  h-full">
          <Link className="text-2xl font-bold" href="/">
            Conveter
          </Link>
          <div className="flex items-center">
            <div className="space-x-5 ">
              <Link href="/">Home</Link>
              <Link href="/history">History</Link>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
