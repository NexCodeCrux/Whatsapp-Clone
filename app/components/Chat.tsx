import Image from "next/image";
import { PinnedIconRounded } from "./CustomIcons";

const Chat = () => {
  return (
    <div className=" dark:text-[#E9EDEF] dark:hover:bg-[#111B21] w-full flex items-center overflow-x-hidden hover:bg-gray-100 cursor-pointer">
      <div className="w-[90px] flex justify-center px-1 items-center">
        <Image
          alt="user profile"
          src="/user.jpg"
          height={50}
          width={50}
          className="rounded-full"
        />
      </div>
      <div className="flex-grow py-3 pr-4 border-b flex flex-col items-center overflow-x-hidden">
        <div className="flex w-full justify-between items-center">
          <h2 className="text-[1.2rem]">Mofiro Jean (You)</h2>
          <span className="text-xs text-gray-500">Sunday</span>
        </div>
        <div className="w-full flex items-center overflow-hidden">
          <div className="whitespace-nowrap text-nowrap overflow-hidden text-ellipsis text-sm text-[#8696A0]">
            Lorem ipsum dolor kbnaksd lkjsnjl lkansd iuehifue ouihefioa kuajehfi
            uioehoaihf
          </div>
          <div className="flex gap-1 items-center justify-center ml-1">
            <div className="flex items-center justify-center bg-green-500 rounded-full h-[20px] w-[22px]">
              <span className="text-xs font-bold text-white p-1">1</span>
            </div>
            <PinnedIconRounded className="text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ArchiveChat = () => {
  return (
    <div className="w-full flex items-center">
      <div className="w-[90px] flex justify-center py-3 items-center">
        <svg
          viewBox="0 0 20 20"
          height="20"
          width="20"
          preserveAspectRatio="xMidYMid meet"
          className="text-green-600"
          fill="none"
        >
          <title>archived</title>
          <path
            d="M18.54 3.23L17.15 1.55C16.88 1.21 16.47 1 16 1H4C3.53 1 3.12 1.21 2.84 1.55L1.46 3.23C1.17 3.57 1 4.02 1 4.5V17C1 18.1 1.9 19 3 19H17C18.1 19 19 18.1 19 17V4.5C19 4.02 18.83 3.57 18.54 3.23ZM4.24 3H15.76L16.57 3.97H3.44L4.24 3ZM3 17V6H17V17H3ZM11.45 8H8.55V11H6L10 15L14 11H11.45V8Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="flex-grow-1 py-3 pr-4 w-full border-b flex items-center justify-between">
        <span>Archived</span>
        <span className="text-xs font-bold text-green-500">7</span>
      </div>
    </div>
  );
};

export default Chat;
