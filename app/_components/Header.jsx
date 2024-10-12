"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SiWebmoney } from "react-icons/si";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center shadow-sm bg-black/[0.96]">
      <div className="flex items-start space-x-3 " href={"/dashboard"}>
        <SiWebmoney className=" text-white  w-8 h-8" />
        <span className="self-center text-2xl font-semibold text-white ">
          SpendSage
        </span>
      </div>
      <div className="flex gap-3 items-center">
        {/* <Link href={"/dashboard"}>
          <Button variant="outline">Dashboard</Button>
        </Link> */}
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href={"/sign-in"} className=" bg-stone-200 rounded-md p-2 text-black font-medium">
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
