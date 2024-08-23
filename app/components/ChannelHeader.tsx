import { Plus, CommunityIconRouned } from "@/app/components/CustomIcons";

const ChannelHeader = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mx-4">
        <h1 className="text-2xl font-extrabold px-5 p-4">Channels</h1>
        <Plus />
      </div>
      <h1 className="text-center text-lg">Stay updated on your favourite topics</h1>
      <h1 className="text-center text-md mt-1 text-wa-dark-secondary">Find channels to follow below</h1>
    </div>
  );
};

export default ChannelHeader;
