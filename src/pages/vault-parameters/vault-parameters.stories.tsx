import type { Meta, StoryObj } from "@storybook/react";
import { VaultParametersView } from "./vault-parameters.view";

const meta: Meta<typeof VaultParametersView> = {
  title: "Pages/VaultParameters",
  component: VaultParametersView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    feeRecipient: "",
    vaultFee: "",
    publicAllocatorFee: "",
    isLoading: false,
    onFeeRecipientChange: () => {},
    onVaultFeeChange: () => {},
    onPublicAllocatorFeeChange: () => {},
    onUpdateParameters: () => {},
  },
};

export const WithData: Story = {
  args: {
    feeRecipient: "0x742d35Cc6673C0532C4514a2a5a1234567890123",
    vaultFee: "2.5",
    publicAllocatorFee: "1.0",
    isLoading: false,
    onFeeRecipientChange: () => {},
    onVaultFeeChange: () => {},
    onPublicAllocatorFeeChange: () => {},
    onUpdateParameters: () => {},
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};