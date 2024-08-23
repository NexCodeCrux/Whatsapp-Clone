import {
  SecurityLock,
  AccountCircle,
  Exit,
  HelpFilled,
  SettingsKeyboard,
  SettingsNotification,
  ChatsFilled,
  WhatsappIcon,
} from "@/app/components/CustomIcons";
import Image from "next/image";
import Link from "next/link";
import { AccordionActions } from "@mui/material";

const ChannelsList = () => {
  return (
    <div className="flex flex-col">
      {/* <Link
        href={``}
        className="flex gap-5 px-5 mt-5 pt-3 hover:bg-wa-light-background dark:text-wa-dark-text  text-wa-dark-background-lighter dark:hover:bg-wa-dark-primary"
      >
        <WhatsappIcon className="text-white" />
        <div className="w-full">
          <h1 className="border-b dark:border-b-wa-dark-primary pb-5">
            Whatsapp
          </h1>
        </div>
      </Link> */}
      <div className="flex justify-center items-center">
        <Link
          href={`/`}
          className="p-3 dark:bg-wa-light-primary w-fit rounded-full"
        >
          Discover more
        </Link>
      </div>
    </div>
  );
};

export default ChannelsList;
