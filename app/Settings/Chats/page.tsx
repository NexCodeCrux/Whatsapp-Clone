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
    </div>
  );
};

export default ChatsSettings;
