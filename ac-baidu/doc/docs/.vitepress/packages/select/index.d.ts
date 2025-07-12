declare const TSelect: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            isShowPagination?: boolean | undefined;
            multiple?: boolean | undefined;
            valueCustom?: string | undefined;
            labelCustom?: string | undefined;
            optionSource?: any;
            filterable?: boolean | undefined;
            paginationOption?: Record<string, any> | undefined;
            useVirtual?: boolean | undefined;
            ref?: import("vue").VNodeRef | undefined;
            style?: unknown;
            onChange?: ((...args: any[]) => any) | undefined;
            onInput?: ((...args: any[]) => any) | undefined;
            key?: string | number | symbol | undefined;
            class?: unknown;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            readonly modelValue?: string | number | unknown[] | undefined;
            readonly width?: string | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            "onSelect-input"?: ((...args: any[]) => any) | undefined;
            readonly customLabel?: string | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "input" | "update:modelValue" | "change" | "select-input", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            width: {
                type: StringConstructor;
            };
            valueCustom: {
                type: StringConstructor;
                default: string;
            };
            labelCustom: {
                type: StringConstructor;
                default: string;
            };
            customLabel: {
                type: StringConstructor;
            };
            optionSource: {
                type: any[];
                default: () => never[];
            };
            filterable: {
                type: BooleanConstructor;
                default: boolean;
            };
            isShowPagination: {
                type: BooleanConstructor;
                default: boolean;
            };
            paginationOption: {
                type: ObjectConstructor;
                default: () => {
                    pageSize: number;
                    currentPage: number;
                    pagerCount: number;
                    total: number;
                };
            };
            useVirtual: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            onInput?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            "onSelect-input"?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "update:modelValue" | "change" | "select-input")[], string, {
            isShowPagination: boolean;
            multiple: boolean;
            valueCustom: string;
            labelCustom: string;
            optionSource: any;
            filterable: boolean;
            paginationOption: Record<string, any>;
            useVirtual: boolean;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        width: {
            type: StringConstructor;
        };
        valueCustom: {
            type: StringConstructor;
            default: string;
        };
        labelCustom: {
            type: StringConstructor;
            default: string;
        };
        customLabel: {
            type: StringConstructor;
        };
        optionSource: {
            type: any[];
            default: () => never[];
        };
        filterable: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowPagination: {
            type: BooleanConstructor;
            default: boolean;
        };
        paginationOption: {
            type: ObjectConstructor;
            default: () => {
                pageSize: number;
                currentPage: number;
                pagerCount: number;
                total: number;
            };
        };
        useVirtual: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        onInput?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        "onSelect-input"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
    };
    valueCustom: {
        type: StringConstructor;
        default: string;
    };
    labelCustom: {
        type: StringConstructor;
        default: string;
    };
    customLabel: {
        type: StringConstructor;
    };
    optionSource: {
        type: any[];
        default: () => never[];
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationOption: {
        type: ObjectConstructor;
        default: () => {
            pageSize: number;
            currentPage: number;
            pagerCount: number;
            total: number;
        };
    };
    useVirtual: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onSelect-input"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "update:modelValue" | "change" | "select-input")[], "input" | "update:modelValue" | "change" | "select-input", {
    isShowPagination: boolean;
    multiple: boolean;
    valueCustom: string;
    labelCustom: string;
    optionSource: any;
    filterable: boolean;
    paginationOption: Record<string, any>;
    useVirtual: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>) & Record<string, any>;
export default TSelect;
