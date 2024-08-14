import Link from "next/link";
import React from "react";
import {
  MessageOutlined,
  DataSaverOffOutlined,
  Groups2Outlined,
  SettingsOutlined,
  SmsOutlined,
  Person2Outlined,
} from "@mui/icons-material";

const NavBar = () => {
  return (
    <div className="bg-gray-200 shadow-lg float-left h-screen p-2 flex flex-col justify-between">
      <div className="flex flex-col gap-3">
        <Link
          href={`/Chats`}
          className="rounded-full p-2 focus:outline-none focus:bg-gray-400 "
        >
          <MessageOutlined />
        </Link>
        <Link href={`/Status`} className="rounded-full p-2 focus:outline-none focus:bg-gray-400">
          <DataSaverOffOutlined />
        </Link>
        <Link href={`/Channels`} className="rounded-full p-2 focus:outline-none focus:bg-gray-400">
          <SmsOutlined />
        </Link>
        <Link href={`/Community`} className="rounded-full p-2 focus:outline-none focus:bg-gray-400">
          <Groups2Outlined />
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <Link href={`/Settings`} className="rounded-full p-2 focus:outline-none focus:bg-gray-400">
          <SettingsOutlined />
        </Link>
        <Link href={`/Profile`} className="rounded-full p-2 focus:outline-none focus:bg-gray-400">
          <Person2Outlined />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
