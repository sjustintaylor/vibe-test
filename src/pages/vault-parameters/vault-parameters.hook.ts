"use client";
import { useState } from "react";

export function useVaultParameters() {
  const [feeRecipient, setFeeRecipient] = useState("");
  const [vaultFee, setVaultFee] = useState("");
  const [publicAllocatorFee, setPublicAllocatorFee] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onUpdateParameters = async () => {
    setIsLoading(true);
    try {
      console.log("Updating vault parameters:", {
        feeRecipient,
        vaultFee,
        publicAllocatorFee,
      });
    } catch (error) {
      console.error("Error updating vault parameters:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    feeRecipient,
    vaultFee,
    publicAllocatorFee,
    isLoading,
    onFeeRecipientChange: setFeeRecipient,
    onVaultFeeChange: setVaultFee,
    onPublicAllocatorFeeChange: setPublicAllocatorFee,
    onUpdateParameters,
  };
}
