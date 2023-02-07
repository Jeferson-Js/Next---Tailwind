import React from "react";
import Link from "next/link";

const header = () => {
  return (
    <header className="flex">
      <nav className="bg-red-500 w-full h-30 flex justify-between items-center py-3 p-3 fixed shadow">
        <Link className="text-3xl text-white flex justify-between items-center" href="/">Oliveira.js</Link>
        <ul className="flex items-center gap-3 list-none">
          <li className="text-white text-xl">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white text-xl">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
