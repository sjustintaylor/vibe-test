import type { Meta, StoryObj } from "@storybook/react";
import { NavbarView } from "./navbar.view";

const meta: Meta<typeof NavbarView> = {
  title: "Components/Navbar",
  component: NavbarView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { href: "/", label: "Home" },
      { href: "/create-vault", label: "Create Vault" },
      { href: "/vault-parameters", label: "Vault Parameters" },
    ],
  },
};