# Pages required in the app

1. Create Vault - requires the following inputs:Owner address, timelock (in days), asset address (erc20 token), name of the vault, and vault symbol
2. Vault Parameters - allows admins to change the Fee Recipient, vault fee, and Public Allocator Fee of the vault

## Navigation

There should be a simple navbar at the top of each page - use a shadcn navigation menu component for it. This navbar should hold a link to every page.

# App structure within src directory:

- pages: Contains each page's hooks, presentational components, and container. Also contains the business logic for any serverless functions.
- app: Contains the route definitions for NextJS. Imports from the pages directory
- components: Contains any components used in multiple pages. Also holds ShadCN UI library
- hooks: Contains any hooks used on multiple pages

# Structural pattern to be used for building components and pages

Pages and components are to be built as self contained units where possible. Each page or component directory should follow the following definition of the container/presentational pattern:

- component-name
  - component-name.tsx: The container. It mounts the hook, and returns the view component
  - component-name.view.tsx: Contains the view component for the page. This component has no internal logic, and relies on parameters passed in.
  - component-name.stories.tsx: The storybook stories for the page
  - component-name.hook.ts: A single `usePageName` hook that returns the props required by the view component
  - hooks/ Contains any extra hooks that might be required to compose functionality for this page or component
  - components/ Contains any extra components needed. There are no subdirectories within this directory - it's flat.

## Code sharing

If a component or hook is used in multiple pages or components, it should be placed in either src/components or src/hooks so it can be properly shared.

## Storybook

All view components are to have a Storybook story for them to demonstrate functionality. It is fine to use mock data and mock functions.

# Blockchain interactions

All blockchain interactions are to use the Thirdweb package. ABIs for each contract we're interacting with are available in the src/abi directory.
