"use client";

import { BackIcon, Chevron } from "@/app/components/CustomIcons";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ChatsSettings = () => {
  const router = useRouter();
  return (
    <div>
      <header className="flex items-center gap-9 mx-5 p-3">
        <button onClick={() => router.push("/Settings")}>
          <BackIcon />
        </button>
        <h1 className="text-lg">Chats</h1>
      </header>

      <section className="flex flex-col">
        <h1 className="text-wa-dark-green p-5 text-sm">Display</h1>
        <Link href={``} className="text-sm flex gap-5 px-5 p-2 pb-2">
          <div className="w-full border-b dark:border-b-wa-dark-primary pb-3">
            <h1 className="text-wa-dark-background">Theme</h1>
            <h1 className="dark:text-wa-dark-secondary text-wa-light-secondary_lighter">
              Dark Mode
            </h1>
          </div>
          <Chevron className="" />
        </Link>

        <Link href={``} className="text-sm flex gap-5 px-5 p-2">
          <div className="w-full">
            <h1 className="">Wallpaper</h1>
          </div>
          <Chevron className="" />
        </Link>
      </section>
      <section className="flex flex-col ">
        <h1 className="text-wa-dark-green p-5 text-sm">Media</h1>
        <Link href={``} className="text-sm flex gap-5 px-5 p-2 pb-2">
          <div className="w-full border-b dark:border-b-wa-dark-primary pb-3">
            <h1 className="">Media auto download</h1>
          </div>
          <Chevron className="" />
        </Link>

        <Link href={``} className="text-sm flex gap-5 px-5 p-2 pb-2">
          <div className="w-full border-b dark:border-b-wa-dark-primary pb-3">
            <h1 className="">Spell check</h1>
            <h1 className="dark:text-wa-dark-secondary text-wa-light-secondary_lighter">
              Check spelling while typing
            </h1>
          </div>
          <input type="checkbox" name="" id="" />
        </Link>

        <Link href={``} className="text-sm flex gap-5 px-5 p-2 pb-2">
          <div className="w-full border-b dark:border-b-wa-dark-primary pb-3">
            <h1 className="">Replace text with emoji</h1>
            <h1 className="dark:text-wa-dark-secondary text-wa-light-secondary_lighter">
              Emoji will replace specific text as you type
            </h1>
          </div>
          <input type="checkbox" name="" id="" />
        </Link>

        <Link href={``} className="text-sm flex gap-5 px-5 p-2 pb-2">
          <div className="w-full border-b dark:border-b-wa-dark-primary pb-3">
            <h1 className="">Enter is send</h1>
            <h1 className="dark:text-wa-dark-secondary text-wa-light-secondary_lighter">
              Enter key will send your message
            </h1>
          </div>
          <input type="checkbox" name="" id="" />
        </Link>
      </section>
    </div>
  );
};

export default ChatsSettings;
