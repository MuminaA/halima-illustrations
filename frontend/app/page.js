import Navbar from "./src/Components/Navbar/Navbar";
import Footer from "./src/Components/Footer/Footer";
import Home from "./src/Pages/Home/Home";
import Shop from "./src/Pages/Shop/Shop";

export default function Page() {
  return (
    <div>
      <Navbar className="md:px-24" />
      <div className="md:mx-24">
        <Shop />
      </div>
      <Footer />
    </div>
  );
}
