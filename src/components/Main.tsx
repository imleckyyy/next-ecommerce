import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="bg-gray-200 flex-grow w-full max-w-screen-xl mx-auto grid p-6 gap-6 sm:grid-cols-2">
      {children}
    </main>
  );
};
