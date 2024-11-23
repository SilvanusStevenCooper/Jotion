"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const Error = () => {
  return (
    <div
      className="h-full flex flex-col items-center justify-center 
  space-y-4"
    >
      <Image
        src={"/error.png"}
        alt="error"
        height={"300"}
        width={"300"}
        className="dark:hidden"
      />

      <div className="bg-white">
        <Image
          src={"/error-dark.png"}
          alt="error"
          height={"300"}
          width={"300"}
          className="hidden dark:block"
        />
      </div>

      <h2 className="text-xl font-medium">Something went wrong</h2>
      <Button>
        <Link href={"/documents"}>Back Home</Link>
      </Button>
    </div>
  );
};

export default Error;
