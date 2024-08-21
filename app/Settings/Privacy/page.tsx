"use client";

import { BackIcon, Chevron } from "@/app/components/CustomIcons";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PrivacySettings = () => {
  const router = useRouter();
  return (
    <div className="overflow-hidden">
      <div className="">
        <header className="flex items-center gap-9 mx-5 p-3">
          <button onClick={() => router.push("/Settings")}>
            <BackIcon />
          </button>
          <h1 className="text-lg">Privacy</h1>
        </header>
        <section className="flex flex-col">
          <h1 className="text-wa-dark-green p-5 text-sm">
            Who can see my personal info
          </h1>
          <Link href={``} className="text-sm flex gap-5 px-5 p-2 pb-2">
            <div className="w-full border-b dark:border-b-wa-dark-primary pb-3">
              <h1 className="">Last seen and online</h1>
              <h1 className="dark:text-wa-dark-secondary text-wa-light-secondary_lighter">
                Nobody
              </h1>
            </div>
            <Chevron className="" />
          </Link>

          <Link href={``} className="text-sm flex gap-5 px-5 p-2">
            <div className="w-full border-b dark:border-b-wa-dark-primary pb-3">
              <h1 className="">Profile photo</h1>
              <h1 className="dark:text-wa-dark-secondary text-wa-light-secondary_lighter">
                Everyone
              </h1>
            </div>
            <Chevron className="" />
          </Link>
          <Link href={``} className="text-sm flex gap-5 px-5 p-2">
            <div className="w-full border-b dark:border-b-wa-dark-primary pb-3">
              <h1 className="">About</h1>
              <h1 className="dark:text-wa-dark-secondary text-wa-light-secondary_lighter">
                Everyone
              </h1>
            </div>
            <Chevron className="" />
          </Link>
          <Link href={``} className="text-sm flex gap-5 px-5 p-2">
            <div className="w-full border-b dark:border-b-wa-dark-primary pb-3">
              <h1 className="">Status</h1>
              <h1 className="dark:text-wa-dark-secondary text-wa-light-secondary_lighter">
                14 contacts excluded
              </h1>
            </div>
            <Chevron className="" />
          </Link>
          <div className="text-sm flex gap-5 px-5 p-2">
            <div className="w-full border-b dark:border-b-wa-dark-primary pb-3">
              <h1 className="">Read receipts</h1>
              <h1 className="dark:text-wa-dark-secondary text-wa-light-secondary_lighter">
                If turned off, you won't send or receive read receipts. Read
                receipts are always sent for group chats.
              </h1>
            </div>
            <input
              type="checkbox"
              name=""
              id=""
              className="border border-wa-dark-green"
            />
          </div>
        </section>

        {/* Dissapearing messgaes */}
        <section className="flex flex-col">
          <h1 className="text-wa-dark-green p-5 ">Dissapearing messages</h1>
          <Link href={``} className="text-sm flex gap-5 px-5 p-2">
            <div className="w-full">
              <h1 className="">Default message timer</h1>
              <h1 className="dark:text-wa-dark-secondary text-wa-light-secondary_lighter">
                Off
              </h1>
            </div>
            <Chevron className="" />
          </Link>
        </section>

        {/* Advanced */}
        {/* <section className="flex flex-col border overflow-auto">
          <h1 className="text-wa-dark-green p-5 ">Dissapearing messages</h1>
          <Link href={``} className="text-sm flex gap-5 px-5 p-2">
            <div className="w-full">
              <h1 className="">Default message timer</h1>
              <h1 className="dark:text-wa-dark-secondary text-wa-light-secondary_lighter">
                To help protect your IP address from being inferred by
                third-party websites, previews for the link you share will no
                longer be generated. Learn more
              </h1>
            </div>
            <input type="checkbox" name="" id="" />
          </Link>
        </section> */}
        
      </div>
    </div>
  );
};

export default PrivacySettings;
