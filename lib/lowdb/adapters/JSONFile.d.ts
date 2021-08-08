import { Adapter } from '../Low.js';
export declare class JSONFile<T> implements Adapter<T> {
    private adapter;
    constructor(filename: string);
    read(): Promise<T | null>;
    write(obj: T): Promise<void>;
}
© 2021 GitHub, Inc.
