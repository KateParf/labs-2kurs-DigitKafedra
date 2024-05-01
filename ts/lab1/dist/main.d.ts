declare let hello: string;
declare function firstSimpleFunc(p1: string, p2: string): string;
declare let firstArrowFunc: (p1: string, p2: string) => string;
declare const res1: string;
declare const res2: string;
declare let numStr: (p1: number, p2: number) => string;
declare const resStr: string;
declare let num: number;
declare const str: string;
declare let bool: boolean;
declare const booleans: boolean[];
declare let anyType: any;
declare let undef: undefined;
declare let nul: null;
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}
declare const datas: ToJsonStringify;
declare const jsonStr: string;
declare const obj: any;
