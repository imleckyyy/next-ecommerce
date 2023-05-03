import { gql, useQuery } from "@apollo/client";

const Home = () => {
  const { loading, error, data } = useQuery(gql`
    query getProductsList {
      products {
        id
        name
        price
        slug
      }
    }
  `);

  if (loading) {
    return "Loading";
  }

  if (error) {
    return JSON.stringify(error);
  }

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default Home;
