import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Header />
      <Main>About page</Main>
      <Footer />
    </div>
  );
};

export default AboutPage;
