import Link from "next/link";
import React from "react";
import {
  SecurityLock,
  AccountCircle,
  Exit,
  HelpFilled,
  SettingsKeyboard,
  SettingsNotification,
  ChatsFilled,
} from "./CustomIcons";

const SettingsList = () => {
  return (
    <div className="flex flex-col max-h-screen overflow-y-auto">
      <Link
        href={`/Settings/Account`}
        className="flex gap-5 px-5 pt-2 hover:bg-wa-light-background dark:text-wa-dark-text  text-wa-dark-background-lighter dark:hover:bg-wa-dark-primary"
      >
        <AccountCircle className="" />
        <div className="w-full">
          <h1 className=" border-b dark:border-b-wa-dark-primary pb-5">
            Account
          </h1>
        </div>
      </Link>
      <Link
        href={`/Settings/Privacy`}
        className="flex gap-5 px-5 pt-2 hover:bg-wa-light-background dark:text-wa-dark-text text-wa-dark-background-lighter dark:hover:bg-wa-dark-primary"
      >
        <SecurityLock className="" />
        <div className="w-full">
          <h1 className=" border-b dark:border-b-wa-dark-primary pb-5">
            Privacy
          </h1>
        </div>
      </Link>
      <Link
        href={`/Settings/Chats`}
        className="flex gap-5 px-5 pt-2 hover:bg-wa-light-background dark:text-wa-dark-text text-wa-dark-background-lighter dark:hover:bg-wa-dark-primary"
      >
        <ChatsFilled className="" />
        <div className="w-full">
          <h1 className=" border-b dark:border-b-wa-dark-primary pb-5">
            Chats
          </h1>
        </div>
      </Link>
      <Link
        href={`/Settings/Notifications`}
        className="flex gap-5 px-5 pt-2 hover:bg-wa-light-background dark:text-wa-dark-text text-wa-dark-background-lighter dark:hover:bg-wa-dark-primary"
      >
        <SettingsNotification className="" />
        <div className="w-full">
          <h1 className=" border-b dark:border-b-wa-dark-primary pb-5">
            Notifications
          </h1>
        </div>
      </Link>
      <Link
        href={`/Settings/Shortcuts`}
        className="flex gap-5 px-5 pt-2 hover:bg-wa-light-background dark:text-wa-dark-text text-wa-dark-background-lighter dark:hover:bg-wa-dark-primary"
      >
        <SettingsKeyboard className="" />
        <div className="w-full">
          <h1 className=" border-b dark:border-b-wa-dark-primary pb-5">
            Keyboard shortcuts
          </h1>
        </div>
      </Link>
      <Link
        href={`/Settings/Help`}
        className="flex gap-5 px-5 pt-2 hover:bg-wa-light-background dark:text-wa-dark-text text-wa-dark-background-lighter dark:hover:bg-wa-dark-primary"
      >
        <HelpFilled className="" />
        <div className="w-full">
          <h1 className=" border-b dark:border-b-wa-dark-primary pb-5">Help</h1>
        </div>
      </Link>
      <Link
        href={`/Settings/LogOut`}
        className="flex gap-5 px-5 pt-2 hover:bg-wa-light-background dark:hover:bg-wa-dark-primary text-red-400"
      >
        <Exit className="" />
        <div className="w-full ">
          <h1 className=" border-b dark:border-b-wa-dark-primary pb-5">
            Log Out
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default SettingsList;
