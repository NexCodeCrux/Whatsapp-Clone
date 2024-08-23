import React from "react";
import CommunityHeader from "../components/CommunityHeader";
import {
  CommunityIconRouned,
  AnnouncementSpeaker,
  AlertBell,
} from "@/app/components/CustomIcons";
import Image from "next/image";

const Community = () => {
  return (
    <div>
      <CommunityHeader />
      <div className="flex flex-col">
        <div className="flex items-center px-4 p-2 cursor-pointer dark:hover:bg-wa-dark-primary border-b border-wa-dark-primary">
          <CommunityIconRouned className="border border-wa-dark-primary rounded-xl w-14 h-12 p-1 bg-wa-dark-secondary" />
          <h1 className="px-5 p-4 ">AWS Student Cloud Club UBa '23</h1>
        </div>

        {/* Announcements */}
        <div className="flex items-center px-4 gap-2 p-2 cursor-pointer dark:hover:bg-wa-dark-primary">
          <AnnouncementSpeaker className=" " />
          <div className="p-3 border-b border-wa-dark-primary">
            <h1 className="flex justify-between items-center">
              <span>Announcements</span>
              <span className="text-sm dark:text-wa-dark-secondary">
                Yesterday
              </span>
            </h1>
            <h1 className="text-sm truncate w-72 dark:text-wa-dark-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              soluta unde possimus, vel odio quibusdam!
            </h1>
          </div>
        </div>
        <div className="flex items-center px-4 gap-2 p-2 cursor-pointer dark:hover:bg-wa-dark-primary">
          <CommunityIconRouned className="border border-wa-dark-primary rounded-full w-14 h-11  p-1 bg-wa-dark-secondary" />

          <div className="p-3 border-b border-wa-dark-primary">
            <h1 className="flex justify-between items-center">
              <span>Announcements</span>
              <span className="text-sm dark:text-wa-dark-secondary">
                Yesterday
              </span>
            </h1>
            <h1 className="text-sm truncate w-72 dark:text-wa-dark-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              soluta unde possimus, vel odio quibusdam!
            </h1>
          </div>
        </div>
        <h1 className="p-3 px-16 cursor-pointer dark:hover:bg-wa-dark-primary dark:text-wa-light-secondary">
          View all
        </h1>
        <h1 className="dark:border w-full p-1 dark:bg-wa-dark-background dark:border-wa-dark-primary"></h1>
      </div>
    </div>
  );
};

export default Community;
