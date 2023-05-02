import { Pagination } from "@/components/Pagination";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductListItem } from "@/components/Product";

const PRODUCTS_PER_PAGE = 5;

const ProductsCSR = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const { isLoading, isError, data } = useQuery({
    queryKey: ["category", page],
    queryFn: async () => {
      const data = await getProducts({
        take: PRODUCTS_PER_PAGE,
        offset: (page - 1) * PRODUCTS_PER_PAGE,
      });
      return data;
    },
  });

  useEffect(() => {
    if (!router.isReady) return;
    setPage(Number(router.query.page));
  }, [router.isReady, router.query.page]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || isError) {
    return <div>Coś poszło nie tak...</div>;
  }

  return (
    <>
      <h1 className="font-bold text-lg mb-6">
        Products CSR | Page: {router.query.page}
      </h1>

      <Pagination
        currentPage={page}
        totalPages={10}
        setPage={setPage}
        path={"/products-csr"}
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
        totalPages={10}
        setPage={setPage}
        path={"/products-csr"}
      />
    </>
  );
};

export default ProductsCSR;

const getProducts = async ({ take, offset }: GetProductsTypes) => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`
  );
  const data: StoreApiResponse[] = await res.json();
  return data;
};

interface GetProductsTypes {
  take: number;
  offset: number;
}

interface StoreApiResponse {
  id: string;
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
