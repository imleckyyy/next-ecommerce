import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { ProductDetails } from "@/components/Product";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Coś poszło nie tak</div>;
  }

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Header />
      <Main>
        <>
          <Link href="/products">Powrót</Link>
          <ProductDetails
            data={{
              id: data.id,
              title: data.title,
              thumbnailUrl: data.image,
              thumbnailAlt: data.title,
              description: data.description,
              rating: data.rating.rate,
            }}
          />
        </>
      </Main>
      <Footer />
    </div>
  );
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const res = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  const data: StoreApiResponse | null = await res.json();

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

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;
