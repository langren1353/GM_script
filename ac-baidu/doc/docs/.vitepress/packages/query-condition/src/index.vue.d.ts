declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            loading?: boolean | undefined;
            reset?: boolean | undefined;
            opts?: Record<string, any> | undefined;
            labelWidth?: string | undefined;
            btnCheckBind?: Record<string, any> | undefined;
            btnResetBind?: Record<string, any> | undefined;
            boolEnter?: boolean | undefined;
            isShowOpen?: boolean | undefined;
            isExpansion?: boolean | undefined;
            maxVisibleRows?: number | undefined;
            packUpTxt?: string | undefined;
            unfoldTxt?: string | undefined;
            configChangedReset?: boolean | undefined;
            isShowWidthSize?: boolean | undefined;
            widthSize?: number | undefined;
            ref?: import("vue").VNodeRef | undefined;
            readonly footer?: Record<string, any> | undefined;
            style?: unknown;
            key?: string | number | symbol | undefined;
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
            class?: unknown;
            onReset?: ((...args: any[]) => any) | undefined;
            onSubmit?: ((...args: any[]) => any) | undefined;
            onHandleEvent?: ((...args: any[]) => any) | undefined;
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
        $emit: (event: "handleEvent" | "reset" | "submit", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            opts: {
                type: ObjectConstructor;
                required: true;
                default: () => {};
            };
            labelWidth: {
                type: StringConstructor;
                default: string;
            };
            btnCheckBind: {
                type: ObjectConstructor;
                default: () => {};
            };
            btnResetBind: {
                type: ObjectConstructor;
                default: () => {};
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            reset: {
                type: BooleanConstructor;
                default: boolean;
            };
            boolEnter: {
                type: BooleanConstructor;
                default: boolean;
            };
            isShowOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
            isExpansion: {
                type: BooleanConstructor;
                default: boolean;
            };
            maxVisibleRows: {
                type: NumberConstructor;
                default: number;
            };
            packUpTxt: {
                type: StringConstructor;
                default: string;
            };
            unfoldTxt: {
                type: StringConstructor;
                default: string;
            };
            footer: ObjectConstructor;
            configChangedReset: {
                type: BooleanConstructor;
                default: boolean;
            };
            isShowWidthSize: {
                type: BooleanConstructor;
                default: boolean;
            };
            widthSize: {
                type: NumberConstructor;
                default: number;
            };
        }>> & {
            onReset?: ((...args: any[]) => any) | undefined;
            onSubmit?: ((...args: any[]) => any) | undefined;
            onHandleEvent?: ((...args: any[]) => any) | undefined;
        }, {
            queryState: {
                form: any;
            };
            props: {
                readonly loading: boolean;
                readonly reset: boolean;
                readonly opts: Record<string, any>;
                readonly labelWidth: string;
                readonly btnCheckBind: Record<string, any>;
                readonly btnResetBind: Record<string, any>;
                readonly boolEnter: boolean;
                readonly isShowOpen: boolean;
                readonly isExpansion: boolean;
                readonly maxVisibleRows: number;
                readonly packUpTxt: string;
                readonly unfoldTxt: string;
                readonly configChangedReset: boolean;
                readonly isShowWidthSize: boolean;
                readonly widthSize: number;
                readonly footer?: Record<string, any> | undefined;
            };
            colLength: import("vue").Ref<number>;
            resetData: () => void;
            resetHandle: () => void;
            checkHandle: (flagText?: any) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("handleEvent" | "reset" | "submit")[], string, {
            loading: boolean;
            reset: boolean;
            opts: Record<string, any>;
            labelWidth: string;
            btnCheckBind: Record<string, any>;
            btnResetBind: Record<string, any>;
            boolEnter: boolean;
            isShowOpen: boolean;
            isExpansion: boolean;
            maxVisibleRows: number;
            packUpTxt: string;
            unfoldTxt: string;
            configChangedReset: boolean;
            isShowWidthSize: boolean;
            widthSize: number;
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
        opts: {
            type: ObjectConstructor;
            required: true;
            default: () => {};
        };
        labelWidth: {
            type: StringConstructor;
            default: string;
        };
        btnCheckBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        btnResetBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        reset: {
            type: BooleanConstructor;
            default: boolean;
        };
        boolEnter: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        isExpansion: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxVisibleRows: {
            type: NumberConstructor;
            default: number;
        };
        packUpTxt: {
            type: StringConstructor;
            default: string;
        };
        unfoldTxt: {
            type: StringConstructor;
            default: string;
        };
        footer: ObjectConstructor;
        configChangedReset: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowWidthSize: {
            type: BooleanConstructor;
            default: boolean;
        };
        widthSize: {
            type: NumberConstructor;
            default: number;
        };
    }>> & {
        onReset?: ((...args: any[]) => any) | undefined;
        onSubmit?: ((...args: any[]) => any) | undefined;
        onHandleEvent?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        queryState: {
            form: any;
        };
        props: {
            readonly loading: boolean;
            readonly reset: boolean;
            readonly opts: Record<string, any>;
            readonly labelWidth: string;
            readonly btnCheckBind: Record<string, any>;
            readonly btnResetBind: Record<string, any>;
            readonly boolEnter: boolean;
            readonly isShowOpen: boolean;
            readonly isExpansion: boolean;
            readonly maxVisibleRows: number;
            readonly packUpTxt: string;
            readonly unfoldTxt: string;
            readonly configChangedReset: boolean;
            readonly isShowWidthSize: boolean;
            readonly widthSize: number;
            readonly footer?: Record<string, any> | undefined;
        };
        colLength: import("vue").Ref<number>;
        resetData: () => void;
        resetHandle: () => void;
        checkHandle: (flagText?: any) => void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    opts: {
        type: ObjectConstructor;
        required: true;
        default: () => {};
    };
    labelWidth: {
        type: StringConstructor;
        default: string;
    };
    btnCheckBind: {
        type: ObjectConstructor;
        default: () => {};
    };
    btnResetBind: {
        type: ObjectConstructor;
        default: () => {};
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    reset: {
        type: BooleanConstructor;
        default: boolean;
    };
    boolEnter: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    isExpansion: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxVisibleRows: {
        type: NumberConstructor;
        default: number;
    };
    packUpTxt: {
        type: StringConstructor;
        default: string;
    };
    unfoldTxt: {
        type: StringConstructor;
        default: string;
    };
    footer: ObjectConstructor;
    configChangedReset: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowWidthSize: {
        type: BooleanConstructor;
        default: boolean;
    };
    widthSize: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onReset?: ((...args: any[]) => any) | undefined;
    onSubmit?: ((...args: any[]) => any) | undefined;
    onHandleEvent?: ((...args: any[]) => any) | undefined;
}, {
    queryState: {
        form: any;
    };
    props: {
        readonly loading: boolean;
        readonly reset: boolean;
        readonly opts: Record<string, any>;
        readonly labelWidth: string;
        readonly btnCheckBind: Record<string, any>;
        readonly btnResetBind: Record<string, any>;
        readonly boolEnter: boolean;
        readonly isShowOpen: boolean;
        readonly isExpansion: boolean;
        readonly maxVisibleRows: number;
        readonly packUpTxt: string;
        readonly unfoldTxt: string;
        readonly configChangedReset: boolean;
        readonly isShowWidthSize: boolean;
        readonly widthSize: number;
        readonly footer?: Record<string, any> | undefined;
    };
    colLength: import("vue").Ref<number>;
    resetData: () => void;
    resetHandle: () => void;
    checkHandle: (flagText?: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("handleEvent" | "reset" | "submit")[], "handleEvent" | "reset" | "submit", {
    loading: boolean;
    reset: boolean;
    opts: Record<string, any>;
    labelWidth: string;
    btnCheckBind: Record<string, any>;
    btnResetBind: Record<string, any>;
    boolEnter: boolean;
    isShowOpen: boolean;
    isExpansion: boolean;
    maxVisibleRows: number;
    packUpTxt: string;
    unfoldTxt: string;
    configChangedReset: boolean;
    isShowWidthSize: boolean;
    widthSize: number;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: Record<any, {
        param: any;
        scope: any;
    }> & {
        footerBtn: (_: {}) => any;
        querybar: (_: {}) => any;
    };
});
export default _default;
