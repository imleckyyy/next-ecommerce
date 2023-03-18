import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";

const Users = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Header />
      <Main>User 123</Main>
      <Footer />
    </div>
  );
};

export default Users;
