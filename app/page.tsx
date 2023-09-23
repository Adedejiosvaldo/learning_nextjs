import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h3>Hello World</h3>
      {/* <a href="/users">Users</a> */}
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
