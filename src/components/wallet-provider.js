"use client";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";

import { SolanaWalletConnectors } from "@dynamic-labs/solana";

export default function WalletProvider({ children }) {
  return (
    <DynamicContextProvider
      settings={{
        appName: "Codadux",
        environmentId: "146734a0-187f-4de7-8097-9166edc491e3",
        walletConnectors: [SolanaWalletConnectors],
      }}
    >
      {children}
    </DynamicContextProvider>
  );
}
