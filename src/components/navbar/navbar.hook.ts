"use client";
export function useNavbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/create-vault", label: "Create Vault" },
    { href: "/vault-parameters", label: "Vault Parameters" },
  ];

  return { links };
}
