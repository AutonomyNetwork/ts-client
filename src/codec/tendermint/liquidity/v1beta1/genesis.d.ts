import Long from "long";
import _m0 from "protobufjs/minimal";
import { Pool, PoolMetadata, PoolBatch, Params, DepositMsgState, WithdrawMsgState, SwapMsgState } from "../../../tendermint/liquidity/v1beta1/liquidity";
export declare const protobufPackage = "tendermint.liquidity.v1beta1";
/** records the state of each pool after genesis export or import, used to check variables */
export interface PoolRecord {
    pool?: Pool;
    poolMetadata?: PoolMetadata;
    poolBatch?: PoolBatch;
    depositMsgStates: DepositMsgState[];
    withdrawMsgStates: WithdrawMsgState[];
    swapMsgStates: SwapMsgState[];
}
/** GenesisState defines the liquidity module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters for the liquidity module. */
    params?: Params;
    poolRecords: PoolRecord[];
}
export declare const PoolRecord: {
    encode(message: PoolRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PoolRecord;
    fromJSON(object: any): PoolRecord;
    toJSON(message: PoolRecord): unknown;
    fromPartial(object: DeepPartial<PoolRecord>): PoolRecord;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
