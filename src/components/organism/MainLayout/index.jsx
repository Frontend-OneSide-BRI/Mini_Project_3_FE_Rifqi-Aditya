import { Navbar } from "@components/molecules";

const MainLayout = ({ children }) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      {children}
    </>
  );
};

export default MainLayout;
