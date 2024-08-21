"use client";

import {
  InfoFilled,
  SettingsSecurity,
  SettingsDocument,
  BackIcon,
} from "@/app/components/CustomIcons";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AccountSettings = () => {
  const router = useRouter();
  return (
    <div className="">
      <header className="flex items-center gap-9 mx-5 p-3">
        <button onClick={() => router.push("/Settings")}>
          <BackIcon />
        </button>
        <h1 className="text-lg">Profile</h1>
      </header>
      <Link
        href={``}
        className="text-lg flex gap-5 px-5 pt-4 p-2 hover:bg-wa-light-background dark:text-wa-dark-text  text-wa-dark-background-lighter dark:hover:bg-wa-dark-primary"
      >
        <SettingsSecurity className="" />
        <div className="w-full">
          <h1 className="pb-5">Security notifications</h1>
        </div>
      </Link>
      <Link
        href={``}
        className="text-lg flex gap-5 px-5 pt-4 p-2 hover:bg-wa-light-background dark:text-wa-dark-text  text-wa-dark-background-lighter dark:hover:bg-wa-dark-primary"
      >
        <SettingsDocument className="" />
        <div className="w-full">
          <h1 className="pb-5">Reuest account info</h1>
        </div>
      </Link>
      <Link
        href={`https://faq.whatsapp.com/2138577903196467/?cms_platform=android&lang=en`}
        className="text-lg flex gap-5 px-5 pt-4 p-2 hover:bg-wa-light-background dark:text-wa-dark-text  text-wa-dark-background-lighter dark:hover:bg-wa-dark-primary"
      >
        <InfoFilled className="" />
        <div className="w-full">
          <h1 className="pb-5">How to delete my account</h1>
        </div>
      </Link>
    </div>
  );
};

export default AccountSettings;
