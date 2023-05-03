import { ProductDetails } from "@/components/Product";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { serialize } from "next-mdx-remote/serialize";
import { apolloClient } from "../../graphql/apolloClient";
import {
  GetProductDetailsBySlugDocument,
  GetProductDetailsBySlugQuery,
  GetProductDetailsBySlugQueryVariables,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
} from "@/gql/graphql";

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Coś poszło nie tak</div>;
  }

  return (
    <>
      <ProductDetails
        data={{
          id: data.slug,
          title: data.name,
          thumbnailUrl: data.images[0].url,
          thumbnailAlt: data.name,
          description: data.description,
          price: data.price,
          rating: 5,
          longDescription: data.longDescription,
        }}
      />
    </>
  );
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument,
  });

  return {
    paths: data.products.map((product) => {
      return {
        params: {
          productId: product.slug,
        },
      };
    }),
    fallback: "blocking",
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

  const { data } = await apolloClient.query<
    GetProductDetailsBySlugQuery,
    GetProductDetailsBySlugQueryVariables
  >({
    variables: {
      slug: params.productId,
    },
    query: GetProductDetailsBySlugDocument,
  });

  if (!data || !data.product) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data.product,
        longDescription: await serialize(data.product.description),
      },
    },
  };
};

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;
