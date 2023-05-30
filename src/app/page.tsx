import Image from "next/image";
import Product from "./products/[product]/page";
import Products from "./products/page";
import About from "./about/page";

export default function Home() {
  return (
    <main>
      <h3> Hello Nest Js</h3>
      <Product />

      <About />
    </main>
  );
}
