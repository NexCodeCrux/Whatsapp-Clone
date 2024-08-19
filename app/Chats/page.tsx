import Chat, { ArchiveChat } from "../components/Chat";
import ChatHeader from "../components/ChatHeader";

const Chats = () => {
  return (
    <section className="dark:text-wa-dark-text text-wa-light-text bg-wa-light-background dark:bg-wa-dark-background h-screen w-full">
      <div className="flex h-full flex-col">
        <ChatHeader />
        <hr className="bg-wa-light-secondary_lighter block dark:hidden" />
        <div className="flex-grow overflow-y-auto">
          <ArchiveChat />
          <Chat />
        </div>
      </div>
    </section>
  );
};

export default Chats;
