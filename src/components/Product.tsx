import { NextSeo } from "next-seo";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Rating } from "./Rating";
import Image from "next/image";
import Head from "next/head";

interface ProductDetails {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
  longDescription: string;
}

interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <div className="flex flex-col h-full gap-2 shadow-xl border-2">
      <NextSeo
        title={data.title}
        description={data.description}
        canonical={`https://next-ecommerce-imleckyyy.vercel.app/products/${data.id}`}
        openGraph={{
          url: `https://next-ecommerce-imleckyyy.vercel.app/products/${data.id}`,
          title: data.title,
          description: data.description,
          images: [
            {
              url: data.thumbnailUrl,
              alt: data.thumbnailAlt,
              type: "image/jpeg",
            },
          ],
          siteName: "Nasz sklep",
        }}
      />
      <div className="relative h-96">
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          className="max-h-full object-contain"
          fill
        />
      </div>
      <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      <p className="p-4">{data.description}</p>
      <Rating rating={data.rating} />
      <div className="prose lg:prose-xl p-4">
        <ReactMarkdown>{data.longDescription}</ReactMarkdown>
      </div>
    </div>
  );
};

type ProductListItem = Pick<
  ProductDetails,
  "id" | "title" | "thumbnailUrl" | "thumbnailAlt"
>;

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <div className="flex flex-col h-full gap-2 shadow-xl border-2">
      <div className="flex justify-center align-center relative h-60 mb-2 bg-white p-6">
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          className="max-h-full object-contain"
          fill
        />
      </div>
      <Link href={`/product/${data.id}`}>
        <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      </Link>
    </div>
  );
};
