import Image from "next/image";
import Link from "next/link";
import Todo from "./Todo/page";
import Header from "../Components/Header/page";
export default function Home() {
  return (
    <main>
      <Header />
      <div className="pt-16">
        <Todo />
      </div>
    </main>
  );
}
