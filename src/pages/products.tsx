import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { ProductListItem } from "@/components/Product";
import { InferGetStaticPropsType } from "next";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Header />
      <Main>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((product) => {
            return (
              <li key={product.id}>
                <ProductListItem
                  data={{
                    id: product.id,
                    title: product.title,
                    thumbnailUrl: product.image,
                    thumbnailAlt: product.title,
                  }}
                />
              </li>
            );
          })}
        </ul>
      </Main>
      <Footer />
    </div>
  );
};

export default ProductsPage;

export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
