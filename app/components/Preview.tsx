import { LockSmallIcon, WABetaLogoDark, WABetaLogoLight } from "./CustomIcons";

const Preview = () => {
  return (
    <div className="dark:bg-wa-dark-background-lighter relative flex items-center justify-center bg-gray-100 float-right h-screen w-4/6">
      <div className="flex flex-col items-center justify-center">
        <span data-icon="intro-md-beta-logo-light" className="block dark:hidden">
          <WABetaLogoLight />
        </span>
        <span data-icon="intro-md-beta-logo-dark" className="hidden dark:block">
          <WABetaLogoDark />
        </span>
        <div className="text-center flex gap-4 flex-col mt-8">
          <h1 className="text-wa-dark-primary dark:text-wa-light-background text-3xl">WhatsApp Web</h1>
          <p className="text-sm text-wa-dark-secondary dark:text-wa-dark-secondary_lighter">
            Send and receive messages without keeping your phone online.
            <br />
            Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
          </p>
        </div>
      </div>
      <div className="absolute bottom-12 flex text-sm items-center justify-center text-wa-dark-secondary_lighter dark:text-wa-dark-secondary_lighter gap-2">
        <LockSmallIcon />
        Your personal messages are end-to-end encrypted
      </div>
    </div>
  );
};

export default Preview;
