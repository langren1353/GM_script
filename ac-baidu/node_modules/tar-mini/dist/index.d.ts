import { Readable, Writable } from 'stream';

type uint8 = number;
interface Head {
    name: uint8;
    mode: uint8;
    uid: uint8;
    gid: uint8;
    size: uint8;
    mtime: uint8;
    chksum: uint8;
    typeflag: uint8;
    linkname: uint8;
    magic: uint8;
    uname: uint8;
    gname: uint8;
    devmajor: uint8;
    devminor: uint8;
    prefix: uint8;
}
interface PaxHead extends Head {
    atime: uint8;
    linkpath: uint8;
}
declare const F_MODE: number;
declare const D_MODE: number;
declare const Mode: {
    readonly TS_UID: 2048;
    readonly TS_GID: 1024;
    readonly TS_VTX: 512;
    readonly TU_READ: 256;
    readonly TU_WRITE: 128;
    readonly TU_EXEC: 64;
    readonly TG_READ: 32;
    readonly TG_WRITE: 16;
    readonly TG_EXEC: 8;
    readonly TO_READ: 4;
    readonly TO_WRITE: 2;
    readonly TO_EXEC: 1;
};
type Mode = typeof Mode[keyof typeof Mode];
declare const STANDARD_TYPE_FLAG_SET: Set<string>;
declare const TypeFlag: {
    readonly REG_TYPE: "0";
    readonly AREG_TYPE: "\0";
    readonly LINK_TYPE: "1";
    readonly SYM_TYPE: "2";
    readonly CHR_TYPE: "3";
    readonly BLK_TYPE: "4";
    readonly DIR_TYPE: "5";
    readonly FIFO_TYPE: "6";
    readonly CONT_TYPE: "7";
    readonly XHD_TYPE: "x";
    readonly XGL_TYPE: "g";
};
type TypeFlag = typeof TypeFlag[keyof typeof TypeFlag];
declare const GnuTypeFlag: {
    readonly GNUTYPE_DUMPDIR: "D";
    readonly GNUTYPE_LONGLINK: "K";
    readonly GNUTYPE_LONGNAME: "L";
    readonly GNUTYPE_MULTIVOL: "M";
    readonly GNUTYPE_SPARSE: "S";
    readonly GNUTYPE_VOLHDR: "V";
    readonly SOLARIS_XHDTYPE: "X";
};
type GnuTypeFlag = typeof GnuTypeFlag[keyof typeof GnuTypeFlag];
type UnionTypeFlag = TypeFlag | GnuTypeFlag;
declare const Magic: {
    T_MAGIC: string;
    T_VERSION: string;
    WHITE_SPACE: number;
    EQ_CHAR: number;
    NULL_CHAR: number;
    NEW_LINE: number;
    NEGATIVE_256: number;
    POSITIVE_256: number;
    GNU_LONG_NAME: string;
};
interface EncodingHeadOptions {
    name: string;
    mode: number;
    uid: number;
    gid: number;
    size: number;
    mtime: number;
    typeflag: TypeFlag;
    linkname?: string;
    uname?: string;
    gname?: string;
    devmajor: number;
    devminor: number;
}
interface EncodingHeadPaxOptions {
    name: string;
    linkname: string;
    pax?: Record<string, string>;
}
type EncodingHeadOptionsWithPax = EncodingHeadOptions & Pick<EncodingHeadPaxOptions, 'pax'>;
interface DecodingHeadOptions {
    filenameEncoding?: string;
}
declare const ERROR_MESSAGES: {
    INVALID_ENCODING_NAME: string;
    INVALID_ENCODING_NAME_LEN: string;
    INVALID_ENCODING_LINKNAME: string;
    INVALID_BASE256: string;
    INVALID_OCTAL_FORMAT: string;
    NOT_INIT: string;
    INVALID_CHKSUM: string;
};
declare function decodeString(b: Uint8Array, offset: number, length: number, encoding?: string): string;
declare function encode(options: EncodingHeadOptions): Uint8Array;
declare function encodePax(options: EncodingHeadPaxOptions): Uint8Array;
declare function decode(b: Uint8Array, options?: DecodingHeadOptions): {
    name: string;
    mode: number;
    uid: number;
    gid: number;
    size: number;
    mtime: number;
    typeflag: UnionTypeFlag;
    linkname: string | null;
    uname: string;
    gname: string;
    devmajor: number;
    devminor: number;
};
declare function decodePax(b: Uint8Array): Record<string, string>;

type PackOptions = Partial<Omit<EncodingHeadOptions, 'name' | 'size' | 'mtime'>> & {
    filename: string;
    pax?: Record<string, string>;
};
declare class Pack {
    private reader;
    private finished;
    constructor();
    private resolveHeadOptions;
    add(binary: Uint8Array, options: PackOptions): void;
    done(): void;
    private fix;
    private transport;
    get receiver(): Readable;
}
declare function createPack(): Pack;
declare class FastBytes {
    private queue;
    bytesLen: number;
    insertedBytesLen: number;
    constructor();
    push(b: Uint8Array): void;
    shift(size: number): Uint8Array;
    peek(size: number): Uint8Array;
}
declare class Extract {
    private writer;
    private decodeOptions;
    matrix: FastBytes;
    private head;
    private missing;
    private offset;
    private flag;
    private elt;
    private total;
    private isNonUSTAR;
    private paxMeta;
    private gnuMeta;
    private pause;
    constructor(options: DecodingHeadOptions);
    private removePadding;
    private transport;
    get receiver(): Writable;
    on(event: 'close', listener: () => void): void;
    on(event: 'drain', listener: () => void): void;
    on(event: 'error', listener: (err: Error) => void): void;
    on(event: 'finish', listener: () => void): void;
    on(event: 'pipe', listener: (src: Readable) => void): void;
    on(event: 'unpipe', listener: (src: Readable) => void): void;
    on(event: 'entry', listener: (head: ReturnType<typeof decode>, u8: Uint8Array) => void): void;
    on(event: string | symbol, listener: (...args: any[]) => void): void;
}
declare function createExtract(options?: DecodingHeadOptions): Extract;

export { D_MODE, type DecodingHeadOptions, ERROR_MESSAGES, type EncodingHeadOptions, type EncodingHeadOptionsWithPax, type EncodingHeadPaxOptions, F_MODE, GnuTypeFlag, type Head, Magic, Mode, type PaxHead, STANDARD_TYPE_FLAG_SET, TypeFlag, type UnionTypeFlag, createExtract, createPack, decode, decodePax, decodeString, encode, encodePax };
