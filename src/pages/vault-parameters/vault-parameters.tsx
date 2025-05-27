"use client";
import { VaultParametersView } from "./vault-parameters.view";
import { useVaultParameters } from "./vault-parameters.hook";

export function VaultParameters() {
  const props = useVaultParameters();
  return <VaultParametersView {...props} />;
}
