import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col justify-center min-h-screen px-4">
      <Head>
        <title>Tytuł strony</title>
        <meta name="description" content="Opis sklepu"></meta>
      </Head>
      <Header />
      <main className="flex-grow w-full max-w-screen-xl mx-auto grid py-5">
        {children}
      </main>
      <Footer />
    </div>
  );
};
