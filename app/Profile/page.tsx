"use client"

import React from "react";
import { BackIcon, Pencil } from "../components/CustomIcons";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter()
  return (
    <div className="flex flex-col bg-wa-light-background dark:bg-wa-dark-background text-wa-dark-primary dark:text-wa-light-background h-screen">
      <header className="flex items-center gap-9 mx-5 p-3 bg-white dark:bg-wa-dark-background">
        <button onClick={() => router.push('/Settings')}>
          <BackIcon />
        </button>
        <h1 className="text-lg">Profile</h1>
      </header>

      {/* User Profile Photo */}
      <div className="bg-wa-light-background dark:bg-wa-dark-background flex justify-center p-5 h-60 cursor-pointer">
        <Image
          src="/user.jpg"
          width={200}
          height={200}
          alt="user profile"
          className="rounded-full"
        />
      </div>

      {/* User Info */}
      <div className="">
        <section className="p-3 bg-white dark:bg-wa-dark-background ">
          <h1 className="px-3 mb-5 text-sm text-wa-light-secondary ">
            Your name
          </h1>
          <h1 className="flex items-center mx-3 justify-between text-wa-dark-secondary ">
            <span className="text-wa-dark-primary dark:text-wa-light-background">
              Mofiro Jean
            </span>
            <Pencil className="" />
          </h1>
        </section>
        <div className="bg-wa-light-background dark:bg-wa-dark-background p-6 text-sm">
          This is not your username or PIN. This name will be visible to your
          Whatsapp contacts.
        </div>
        <section className="p-3 bg-white dark:bg-wa-dark-background max-h-screen ">
          <h1 className="px-3 mb-5 text-sm text-wa-light-secondary dark:">
            About
          </h1>
          <h1 className="flex items-center mx-3 justify-between text-wa-dark-secondary">
            <span className="text-wa-dark-primary dark:text-wa-light-background">
              Lorem ipsum dolor sit amet.
            </span>
            <Pencil className="" />
          </h1>
        </section>
      </div>
    </div>
  );
};

export default page;
