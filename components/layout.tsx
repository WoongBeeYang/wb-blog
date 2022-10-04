import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="bg-[#f8f9fa] dark:bg-[#282828]">
      <Header />
        <div>{children}</div>
      <Footer />
    </div>
  );
}
