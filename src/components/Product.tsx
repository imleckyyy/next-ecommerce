import { NextSeo } from "next-seo";
import Link from "next/link";
import { Rating } from "./Rating";
import Image from "next/image";
import { CustomReactMarkdown } from "./CustomReactMarkdown";

interface ProductDetails {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
  longDescription: string;
  price: number;
}

interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <>
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
      <div className="w-full grid grid-cols-12 max-w-screen-xl mx-auto gap-y-6 gap-x-10">
        <div className="col-start-8 col-span-5">
          <h2 className="text-3xl font-bold">{data.title}</h2>
        </div>
        <div className="col-start-1 col-span-7 row-start-1 row-span-3">
          <div className="relative h-96 bg-white rounded-md">
            <Image
              src={data.thumbnailUrl}
              alt={data.thumbnailAlt}
              className="max-h-full object-contain"
              fill
            />
          </div>
        </div>
        <div className="col-span-5">
          <div className="font-bold">{data.price} PLN</div>
          <Rating rating={data.rating} />
          <p>{data.description}</p>
        </div>
        <div className="col-start-1 col-span-12 row-start-4">
          <h3 className="text-xl mb-6">Opis produktu:</h3>
          <div className="prose lg:prose-xl">
            <CustomReactMarkdown>{data.longDescription}</CustomReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

type ProductListItem = Pick<
  ProductDetails,
  "id" | "title" | "thumbnailUrl" | "thumbnailAlt" | "price"
>;

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <div className="flex flex-col h-full p-4 bg-white rounded-md">
      <div className="flex justify-center align-center relative aspect-[4/3] mb-8">
        <Image
          src={data.thumbnailUrl}
          alt={data.thumbnailAlt}
          className="max-h-full object-contain"
          fill
        />
      </div>
      <div className="flex justify-between">
        <Link href={`/product/${data.id}`}>
          <h2 className="text-sm text-gray-700 hover:text-gray-500">
            {data.title}
          </h2>
        </Link>
        <div className="text-sm font-medium text-gray-900">
          {data.price} PLN
        </div>
      </div>
    </div>
  );
};
