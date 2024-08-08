import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">

      <Header/>

      <Banner/>

      <Products/>

      <Blog/>

      <Footer/>

    </main>
  );
}
