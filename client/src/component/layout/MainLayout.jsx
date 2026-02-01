import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "24px" }}>{children}</main>
    </div>
  );
};

export default MainLayout;
