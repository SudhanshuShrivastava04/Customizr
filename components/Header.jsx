"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="sticky w-full top-0 md:p-3 p-2 shadow-sm glassmorphism z-50 bg-transparent">
      <div className="flex items-center justify-between">
        <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
        {isSignedIn ? (
          <div className="flex items-center gap-5">
            <Link href="/dashboard">
              <Button className="flex gap-x-2" variant="outline">
                Go to Dashboard
                <IoIosArrowRoundForward size={24} />
              </Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <SignInButton>
            <Button className="flex gap-x-2">
              Get Started
              <IoIosArrowRoundForward size={24} />
            </Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
};

export default Header;
