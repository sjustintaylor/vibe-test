import type { Meta, StoryObj } from "@storybook/react";
import { CreateVaultView } from "./create-vault.view";

const meta: Meta<typeof CreateVaultView> = {
  title: "Pages/CreateVault",
  component: CreateVaultView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ownerAddress: "",
    timelock: "",
    assetAddress: "",
    vaultName: "",
    vaultSymbol: "",
    isLoading: false,
    onOwnerAddressChange: () => {},
    onTimelockChange: () => {},
    onAssetAddressChange: () => {},
    onVaultNameChange: () => {},
    onVaultSymbolChange: () => {},
    onCreateVault: () => {},
  },
};

export const WithData: Story = {
  args: {
    ownerAddress: "0x742d35Cc6673C0532C4514a2a5a1234567890123",
    timelock: "30",
    assetAddress: "0xA0b86a33E6441C3f54C11B4B4b5e0B8B8E1234567",
    vaultName: "My Test Vault",
    vaultSymbol: "MTV",
    isLoading: false,
    onOwnerAddressChange: () => {},
    onTimelockChange: () => {},
    onAssetAddressChange: () => {},
    onVaultNameChange: () => {},
    onVaultSymbolChange: () => {},
    onCreateVault: () => {},
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};