import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import SEO from "../../next-seo.config";
import { CartStateContextProvider } from "@/components/Cart/CartContext";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../graphql/apolloClient";

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <CartStateContextProvider>
        <Layout>
          <DefaultSeo {...SEO} />
          <QueryClientProvider client={client}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Layout>
      </CartStateContextProvider>
    </ApolloProvider>
  );
}
