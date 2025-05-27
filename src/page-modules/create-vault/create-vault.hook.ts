"use client";
import { useState } from "react";

export function useCreateVault() {
  const [ownerAddress, setOwnerAddress] = useState("");
  const [timelock, setTimelock] = useState("");
  const [assetAddress, setAssetAddress] = useState("");
  const [vaultName, setVaultName] = useState("");
  const [vaultSymbol, setVaultSymbol] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onCreateVault = async () => {
    setIsLoading(true);
    try {
      console.log("Creating vault with:", {
        ownerAddress,
        timelock,
        assetAddress,
        vaultName,
        vaultSymbol,
      });
    } catch (error) {
      console.error("Error creating vault:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    ownerAddress,
    timelock,
    assetAddress,
    vaultName,
    vaultSymbol,
    isLoading,
    onOwnerAddressChange: setOwnerAddress,
    onTimelockChange: setTimelock,
    onAssetAddressChange: setAssetAddress,
    onVaultNameChange: setVaultName,
    onVaultSymbolChange: setVaultSymbol,
    onCreateVault,
  };
}
