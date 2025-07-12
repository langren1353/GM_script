type Func = (...args: any[]) => any;
/**
 * 防抖函数
 * @param { Function } func 函数
 * @param { Number } delay 防抖时间
 * @param { Boolean } immediate 是否立即执行
 * @param { Function } resultCallback
 */
export declare function debounce(func: Func, delay?: number, immediate?: boolean, resultCallback?: Func): {
    (this: unknown, ...args: any[]): Promise<unknown>;
    cancel(): void;
};
/**
 * 节流函数
 * @param { Function } func
 * @param { Boolean } interval
 * @param { Object } options
 * leading:初始 trailing:结尾
 */
export declare function throttle(func: Func, interval: number, options?: {
    leading: boolean;
    trailing: boolean;
}): {
    (this: unknown, ...args: any[]): void;
    cancel(): void;
};
/**
 * 驼峰转换下划线
 * @param { String } name
 */
export declare function toLine(name: string): string;
export declare function formatNumber(value: number | string, precision?: number, separator?: string, decimal?: string, prefix?: string, suffix?: string): string;
export {};
