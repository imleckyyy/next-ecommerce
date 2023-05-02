import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="flex-grow w-full max-w-screen-xl mx-auto grid px-4 py-6">
      {children}
    </main>
  );
};
