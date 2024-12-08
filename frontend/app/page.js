import Navbar from "./src/Components/Navbar/Navbar";
import Hero from "./src/Components/Hero/Hero";
import Featured from "./src/Components/Featured/Featured";
import Aboutme from "./src/Components/Aboutme/Aboutme";
import Footer from "./src/Components/Footer/Footer";
import Cart from "./src/Components/Cart/Cart";

export default function Home() {
  return (
    <div>
      <div className="md:mx-24">
        <Navbar />
        <Hero className="mb-[6rem]" />
        <Featured className="mb-[6rem]" />
        <Aboutme className="mb-[6rem]" />
      </div>
      <Footer />
    </div>
  );
}
