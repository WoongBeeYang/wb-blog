import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="bg-[#F5D08A]">
      <Header />
        <div>{children}</div>
      <Footer />
    </div>
  );
}
