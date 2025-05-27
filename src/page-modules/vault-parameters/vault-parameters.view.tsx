import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface VaultParametersViewProps {
  feeRecipient: string;
  vaultFee: string;
  publicAllocatorFee: string;
  isLoading: boolean;
  onFeeRecipientChange: (value: string) => void;
  onVaultFeeChange: (value: string) => void;
  onPublicAllocatorFeeChange: (value: string) => void;
  onUpdateParameters: () => void;
}

export function VaultParametersView({
  feeRecipient,
  vaultFee,
  publicAllocatorFee,
  isLoading,
  onFeeRecipientChange,
  onVaultFeeChange,
  onPublicAllocatorFeeChange,
  onUpdateParameters,
}: VaultParametersViewProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Vault Parameters</h1>
      
      <div className="max-w-md space-y-4">
        <div>
          <Label htmlFor="feeRecipient">
            Fee Recipient
          </Label>
          <Input
            id="feeRecipient"
            type="text"
            value={feeRecipient}
            onChange={(e) => onFeeRecipientChange(e.target.value)}
            placeholder="0x..."
          />
        </div>

        <div>
          <Label htmlFor="vaultFee">
            Vault Fee (%)
          </Label>
          <Input
            id="vaultFee"
            type="number"
            step="0.01"
            value={vaultFee}
            onChange={(e) => onVaultFeeChange(e.target.value)}
            placeholder="2.5"
          />
        </div>

        <div>
          <Label htmlFor="publicAllocatorFee">
            Public Allocator Fee (%)
          </Label>
          <Input
            id="publicAllocatorFee"
            type="number"
            step="0.01"
            value={publicAllocatorFee}
            onChange={(e) => onPublicAllocatorFeeChange(e.target.value)}
            placeholder="1.0"
          />
        </div>

        <Button 
          onClick={onUpdateParameters}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Updating..." : "Update Parameters"}
        </Button>
      </div>
    </div>
  );
}