"use client";

import { BackIcon, Chevron } from "@/app/components/CustomIcons";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotificationsSettings = () => {
  const router = useRouter();

  return (
    <div>
      <header className="flex items-center gap-9 mx-5 p-3">
        <button onClick={() => router.push("/Settings")}>
          <BackIcon />
        </button>
        <h1 className="text-lg">Notifications</h1>
      </header>
      <section className="flex flex-col p-3">
        <h1 className="text-wa-dark-green p-5 text-sm">Messages</h1>
        <Link href={``} className="text-sm flex gap-5 px-5 p-2 pb-2">
          <div className="w-full border-b dark:border-b-wa-dark-primary pb-3">
            <h1 className="">Message notifications</h1>
            <h1 className="dark:text-wa-dark-secondary text-wa-light-secondary_lighter">
              Show notifications for new messages
            </h1>
          </div>
          <input type="checkbox" name="" id="" />
        </Link>

        <Link href={``} className="text-sm flex gap-5 px-5 p-2 pb-2">
          <div className="w-full border-b dark:border-b-wa-dark-primary pb-3">
            <h1 className="">Show previews</h1>
          </div>
          <input type="checkbox" name="" id="" />
        </Link>

        <Link href={``} className="text-sm flex gap-5 px-5 p-2 pb-2">
          <div className="w-full border-b dark:border-b-wa-dark-primary pb-3">
            <h1 className="">Show reaction notifications</h1>
          </div>
          <input type="checkbox" name="" id="" />
        </Link>
      </section>
      <section className="flex flex-col p-3">
        <Link href={``} className="text-sm flex gap-5 px-5 p-2 pb-2">
          <div className="w-full border-b dark:border-b-wa-dark-primary pb-3">
            <h1 className="">Background sync</h1>
            <h1 className="dark:text-wa-dark-secondary text-wa-light-secondary_lighter">
              Get faster performance by syncing messgaes in the background
            </h1>
          </div>
          <input type="checkbox" name="" id="" />
        </Link>

        <Link href={``} className="text-sm flex gap-5 px-5 p-2 pb-2">
          <div className="w-full border-b dark:border-b-wa-dark-primary pb-3">
            <h1 className="">Sounds</h1>
            <h1 className="dark:text-wa-dark-secondary text-wa-light-secondary_lighter">
              Play sounds for incoming messages
            </h1>
          </div>
          <input type="checkbox" name="" id="" />
        </Link>
      </section>
    </div>
  );
};

export default NotificationsSettings;
