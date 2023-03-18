import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Product } from "@/components/Product";

const DATA = {
  description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ducimus
  quidem vitae nisi aliquam. Consequatur sunt officia molestias a eos
  amet voluptates, placeat quidem alias deleniti ex at dolorem
  voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
  quasi ipsa eum sapiente provident illo incidunt est ullam voluptas,
  ipsum itaque laborum dolorem. Ipsam exercitationem corrupti reiciendis
  tempora cumque ullam?`,
  thumbnailUrl: `https://picsum.photos/536/354`,
  thumbnailAlt: "Alternatywny tekst obrazka",
  rating: 4.5,
};

const Home = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Header />
      <Main>
        <Product data={DATA} />
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
