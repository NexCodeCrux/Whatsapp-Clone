import Chat, { ArchiveChat } from "../components/Chat";
import ChatHeader from "../components/ChatHeader";

const Chats = () => {
  return (
    <section className="h-screen w-full">
      <div className="flex h-full flex-col">
        <ChatHeader />
        <hr />
        <div className="flex-grow overflow-y-auto">
          <ArchiveChat />
          <Chat />
        </div>
      </div>
    </section>
  );
};

export default Chats;
