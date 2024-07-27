export const SUBWALLET_ID = 239;

export const DEFAULT_TIMEOUT = 128;

export enum OP {
    InternalTransfer = 0xae42e5a4,
    AssignNewOwner = 0x16d65166,
    AcceptOwnership = 0xb5039ab7,
    UpdatePublicKey = 0xba2c49bd,
    Update = 0x023cd52c
}
export abstract class Errors {
    static invalid_signature = 33;
    static invalid_subwallet = 34;
    static invalid_creation_time = 35;
    static already_executed = 36;
}

export const maxKeyCount = (1 << 13); //That is max key count not max key value
export const maxShift = maxKeyCount - 1;
export const maxQueryCount = maxKeyCount * 1023; // Therefore value count
export const maxQueryId = (maxShift << 10) + 1022;