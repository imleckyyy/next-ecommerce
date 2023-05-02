import { Pagination } from "@/components/Pagination";
import { useRouter } from "next/router";
import { ProductListItem } from "@/components/Product";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useState } from "react";

const PRODUCTS_PER_PAGE = 5;

const ProductsSSG = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const [page, setPage] = useState(1);

  if (!data) {
    return <div>Coś poszło nie tak...</div>;
  }

  return (
    <>
      <h1 className="font-bold text-lg mb-6">
        Products SSG | Page: {router.query.page}
      </h1>

      <Pagination
        currentPage={page}
        totalPages={15}
        setPage={setPage}
        path={"/products"}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
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

      <Pagination
        currentPage={page}
        totalPages={15}
        setPage={setPage}
        path={"/products"}
      />
    </>
  );
};

export default ProductsSSG;

export const getStaticPaths = async () => {
  return {
    paths: Array.from({ length: 10 }, (_, i) => i + 1).map((pageIndex) => ({
      params: {
        page: pageIndex.toString(),
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.page) {
    return {
      props: {},
      notFound: true,
    };
  }

  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${PRODUCTS_PER_PAGE}&offset=${
      (Number(params.page) - 1) * PRODUCTS_PER_PAGE
    }`
  );
  const data: StoreApiResponse[] | null = await res.json();

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
