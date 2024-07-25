import { CompilerConfig } from '@ton/blueprint';
import { writeFile } from 'fs/promises';

export const compile: CompilerConfig = {
    lang: 'func',
    targets: ['contracts/highload-wallet-v3.func'],
    postCompileHook: async (code) => {
        await writeFile('build/highload-wallet-v3.cell', code.toBoc());
    }
};