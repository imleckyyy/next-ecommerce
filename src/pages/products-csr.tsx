import { Product } from "@/components/Product";
import { useQuery } from "@tanstack/react-query";

const getProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const data: StoreApiResponse[] = await res.json();
  return data;
};

const ProductsCSRPage = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || isError) {
    return <div>Coś poszło nie tak</div>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((product) => {
        return (
          <li key={product.id}>
            <Product
              data={{
                title: product.title,
                description: product.description,
                thumbnailUrl: product.image,
                thumbnailAlt: product.title,
                rating: product.rating.rate,
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsCSRPage;

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
