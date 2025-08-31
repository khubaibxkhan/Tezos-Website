"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Hide Navbar on /members
  if (pathname === "/members") return null;

  return <Navbar />;
}