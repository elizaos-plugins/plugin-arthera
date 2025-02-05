import { Hash, Address, Chain, PublicClient, HttpTransport, Account, WalletClient } from 'viem';
import * as viemChains from 'viem/chains';

declare const _SupportedChainList: Array<keyof typeof viemChains>;
type SupportedChain = (typeof _SupportedChainList)[number];
interface Transaction {
    hash: Hash;
    from: Address;
    to: Address;
    value: bigint;
    data?: `0x${string}`;
    chainId?: number;
}
interface ChainMetadata {
    chainId: number;
    name: string;
    chain: Chain;
    rpcUrl: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    blockExplorerUrl: string;
}
interface ChainConfig {
    chain: Chain;
    publicClient: PublicClient<HttpTransport, Chain, Account | undefined>;
    walletClient?: WalletClient;
}
interface TransferParams {
    fromChain: SupportedChain;
    toAddress: Address;
    amount: string;
    data?: `0x${string}`;
}
interface ArtheraPluginConfig {
    rpcUrl?: {
        arthera?: string;
    };
    secrets?: {
        ARTHERA_PRIVATE_KEY: string;
    };
    testMode?: boolean;
    multicall?: {
        batchSize?: number;
        wait?: number;
    };
}
interface ProviderError extends Error {
    code?: number;
    data?: unknown;
}

declare const artheraPlugin: {
    name: string;
    description: string;
    providers: Provider[];
    evaluators: any[];
    services: any[];
    actions: {
        name: string;
        description: string;
        handler: (runtime: IAgentRuntime, _message: Memory, state: State, _options: Record<string, unknown>, callback?: HandlerCallback) => Promise<boolean>;
        template: string;
        validate: (runtime: IAgentRuntime) => Promise<boolean>;
        examples: {
            user: string;
            content: {
                text: string;
                action: string;
            };
        }[][];
        similes: string[];
    }[];
};

export { type ArtheraPluginConfig, type ChainConfig, type ChainMetadata, type ProviderError, type SupportedChain, type Transaction, type TransferParams, artheraPlugin, artheraPlugin as default };
