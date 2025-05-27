"use client";
import { CreateVaultView } from "./create-vault.view";
import { useCreateVault } from "./create-vault.hook";

export function CreateVault() {
  const props = useCreateVault();
  return <CreateVaultView {...props} />;
}
