import Image from "next/image";
import { Button } from "./ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
  return (
    <div className="fixed w-full top-0 md:p-3 p-2 border-b shadow-sm glassmorphism z-50 bg-transparent">
      <div className="flex items-center justify-between">
        <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
        <Button className="flex gap-x-2">
          Get Started
          <IoIosArrowRoundForward size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
