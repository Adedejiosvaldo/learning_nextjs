import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h3>Hello World</h3>
      {/* <a href="/users">Users</a> */}
      <Link href="/users">Users</Link>
    </main>
  );
}
 