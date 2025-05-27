"use client";
import { NavbarView } from "./navbar.view";
import { useNavbar } from "./navbar.hook";

export function Navbar() {
  const props = useNavbar();
  return <NavbarView {...props} />;
}
