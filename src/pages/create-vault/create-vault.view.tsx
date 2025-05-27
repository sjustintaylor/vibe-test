import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CreateVaultViewProps {
  ownerAddress: string;
  timelock: string;
  assetAddress: string;
  vaultName: string;
  vaultSymbol: string;
  isLoading: boolean;
  onOwnerAddressChange: (value: string) => void;
  onTimelockChange: (value: string) => void;
  onAssetAddressChange: (value: string) => void;
  onVaultNameChange: (value: string) => void;
  onVaultSymbolChange: (value: string) => void;
  onCreateVault: () => void;
}

export function CreateVaultView({
  ownerAddress,
  timelock,
  assetAddress,
  vaultName,
  vaultSymbol,
  isLoading,
  onOwnerAddressChange,
  onTimelockChange,
  onAssetAddressChange,
  onVaultNameChange,
  onVaultSymbolChange,
  onCreateVault,
}: CreateVaultViewProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create Vault</h1>
      
      <div className="max-w-md space-y-4">
        <div>
          <Label htmlFor="ownerAddress">
            Owner Address
          </Label>
          <Input
            id="ownerAddress"
            type="text"
            value={ownerAddress}
            onChange={(e) => onOwnerAddressChange(e.target.value)}
            placeholder="0x..."
          />
        </div>

        <div>
          <Label htmlFor="timelock">
            Timelock (in days)
          </Label>
          <Input
            id="timelock"
            type="number"
            value={timelock}
            onChange={(e) => onTimelockChange(e.target.value)}
            placeholder="30"
          />
        </div>

        <div>
          <Label htmlFor="assetAddress">
            Asset Address (ERC20 Token)
          </Label>
          <Input
            id="assetAddress"
            type="text"
            value={assetAddress}
            onChange={(e) => onAssetAddressChange(e.target.value)}
            placeholder="0x..."
          />
        </div>

        <div>
          <Label htmlFor="vaultName">
            Vault Name
          </Label>
          <Input
            id="vaultName"
            type="text"
            value={vaultName}
            onChange={(e) => onVaultNameChange(e.target.value)}
            placeholder="My Vault"
          />
        </div>

        <div>
          <Label htmlFor="vaultSymbol">
            Vault Symbol
          </Label>
          <Input
            id="vaultSymbol"
            type="text"
            value={vaultSymbol}
            onChange={(e) => onVaultSymbolChange(e.target.value)}
            placeholder="MVT"
          />
        </div>

        <Button 
          onClick={onCreateVault}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Creating..." : "Create Vault"}
        </Button>
      </div>
    </div>
  );
}