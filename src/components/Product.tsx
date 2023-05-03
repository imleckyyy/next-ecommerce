import { NextSeo } from "next-seo";
import Link from "next/link";
import { Rating } from "./Rating";
import Image from "next/image";
import { CustomReactMarkdown } from "./CustomReactMarkdown";
import { MarkdownResult } from "../../utils";
import { useCartState } from "./Cart/CartContext";

interface ProductDetails {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
  longDescription: MarkdownResult;
  price: number;
}

interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
  const cartState = useCartState();

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
          <div className="mt-3 mb-5 flex">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              onClick={() => {
                cartState.addItemToCart({
                  id: data.id,
                  title: data.title,
                  price: data.price,
                  count: 1,
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 md:mr-2 group-hover:stroke-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span>Buy</span>
            </button>
          </div>
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
  const cartState = useCartState();

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
      <div className="mt-3 flex justify-center">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={() => {
            cartState.addItemToCart({
              id: data.id,
              title: data.title,
              price: data.price,
              count: 1,
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 md:mr-2 group-hover:stroke-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <span>Buy</span>
        </button>
      </div>
    </div>
  );
};
