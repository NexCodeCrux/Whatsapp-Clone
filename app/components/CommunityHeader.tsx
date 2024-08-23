import {
  Plus,
  CommunityIconRouned,
} from "@/app/components/CustomIcons";

const CommunityHeader = () => {
  return (
    <div className="flex flex-col">
      <div>
        <div className="flex justify-between items-center mx-4">
          <h1 className="text-xl font-extrabold px-5 p-4">Communities</h1>
          <Plus />
        </div>
      </div>
      <div className="flex items-center px-4 p-2 cursor-pointer dark:hover:bg-wa-dark-primary">
        <CommunityIconRouned className="border border-wa-dark-primary rounded-lg w-12 h-10 p-1 bg-wa-light-secondary" />
        <h1 className="px-5 p-4 ">New community</h1>
      </div>
    </div>
  );
};

export default CommunityHeader;
