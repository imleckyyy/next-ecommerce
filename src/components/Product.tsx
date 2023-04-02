import Link from "next/link";
import { Rating } from "./Rating";
import Image from "next/image";

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  rating: number;
}

interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <div className="flex flex-col h-full gap-2 shadow-xl border-2">
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
