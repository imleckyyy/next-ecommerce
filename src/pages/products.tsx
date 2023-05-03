import { ProductListItem } from "@/components/Product";
import { apolloClient } from "../graphql/apolloClient";
import { InferGetStaticPropsType } from "next";
import { GetProductsListDocument, GetProductsListQuery } from "@/gql/graphql";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Coś poszło nie tak...</div>;
  }

  return (
    <>
      <h1 className="font-bold text-lg mb-8">Products</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {data.products.map((product) => {
          return (
            <li key={product.slug}>
              <ProductListItem
                data={{
                  id: product.slug,
                  title: product.name,
                  thumbnailUrl: product.images[0].url,
                  thumbnailAlt: product.name,
                  price: product.price,
                }}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsPage;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetProductsListQuery>({
    query: GetProductsListDocument,
  });

  return {
    props: {
      data,
    },
  };
};
