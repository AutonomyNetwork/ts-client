import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate';
import Long from 'long';
import { QueryClientImpl } from './codec/issuance/v1beta1/query';
import { Token } from './codec/issuance/v1beta1/token';

export interface IssuanceExtension {
  readonly issuance: {
    readonly token: (id: Long.Long) => Promise<Token | null>;
    readonly tokenAll: () => Promise<Token[] | null>;
  };
}

export function setupIssuanceExtension(base: QueryClient): IssuanceExtension {
  const rpc = createProtobufRpcClient(base);

  const queryService = new QueryClientImpl(rpc);

  return {
    issuance: {
      token: async (id: Long.Long) => {
        const { token } = await queryService.Token({
          id: id,
        });
        return token ?? null;
      },
      tokenAll: async () => {
        const { tokens } = await queryService.TokenAll({});
        return tokens ?? null;
      },
    },
  };
}
