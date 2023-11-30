"use client";
// import Image from 'next/image'
import { useState } from "react";
import Balance from "@/components/Balance";
import NavBar from "@/components/nav/NavBar";
import Transactions from "@/components/transactions/Transactions";
import { AnimatePresence } from "framer-motion";
import SideMenu from "@/components/SideMenu";

export default function Home() {

  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="bg-trashed-colors-white-80 w-full m-auto h-full px-10">
      <NavBar />
      <div className="w-[80%] m-auto">
        <Balance />
        <Transactions setFilterOpen={setFilterOpen} filterOpen={filterOpen} />
        <SideMenu/>
      </div>
    </div>
  );
}
