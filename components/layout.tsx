import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="bg-[#F5D08A] dark:bg-[#282828]">
      <Header />
        <div>{children}</div>
      <Footer />
    </div>
  );
}
