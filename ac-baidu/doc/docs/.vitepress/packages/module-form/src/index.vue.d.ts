import { nextTick } from "vue";
import type { PropType } from "vue";
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            handleType?: "desc" | "edit" | undefined;
            isShowHeader?: boolean | undefined;
            titleSlot?: boolean | undefined;
            isShowBack?: boolean | undefined;
            isGoBackEvent?: boolean | undefined;
            btnSaveBind?: Record<string, any> | undefined;
            btnCancelBind?: Record<string, any> | undefined;
            isTabMargin?: boolean | undefined;
            tabMarginNum?: number | undefined;
            ref?: import("vue").VNodeRef | undefined;
            readonly footer?: Record<string, any> | undefined;
            style?: unknown;
            readonly title?: string | undefined;
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
            readonly submit?: Function | undefined;
            onValidateError?: ((...args: any[]) => any) | undefined;
            onBack?: ((...args: any[]) => any) | undefined;
            onTabsChange?: ((...args: any[]) => any) | undefined;
            readonly subTitle?: string | undefined;
            readonly tabs?: any;
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
        $emit: (event: "validateError" | "back" | "tabsChange", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            handleType: {
                type: PropType<"desc" | "edit">;
                validator: (value: string) => boolean;
                default: string;
            };
            isShowHeader: {
                type: BooleanConstructor;
                default: boolean;
            };
            titleSlot: {
                type: BooleanConstructor;
                default: boolean;
            };
            isShowBack: {
                type: BooleanConstructor;
                default: boolean;
            };
            isGoBackEvent: {
                type: BooleanConstructor;
                default: boolean;
            };
            btnSaveBind: {
                type: ObjectConstructor;
                default: () => {};
            };
            btnCancelBind: {
                type: ObjectConstructor;
                default: () => {};
            };
            isTabMargin: {
                type: BooleanConstructor;
                default: boolean;
            };
            tabMarginNum: {
                type: NumberConstructor;
                default: number;
            };
            footer: ObjectConstructor;
            title: StringConstructor;
            subTitle: StringConstructor;
            tabs: any[];
            submit: FunctionConstructor;
        }>> & {
            onValidateError?: ((...args: any[]) => any) | undefined;
            onBack?: ((...args: any[]) => any) | undefined;
            onTabsChange?: ((...args: any[]) => any) | undefined;
        }, {
            clearValidate: () => void;
            resetFormFields: () => void;
            updateFormFields: () => void;
            setSelectedTab: (key: any) => void;
            saveHandle: () => Promise<void>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("validateError" | "back" | "tabsChange")[], string, {
            handleType: "desc" | "edit";
            isShowHeader: boolean;
            titleSlot: boolean;
            isShowBack: boolean;
            isGoBackEvent: boolean;
            btnSaveBind: Record<string, any>;
            btnCancelBind: Record<string, any>;
            isTabMargin: boolean;
            tabMarginNum: number;
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
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        handleType: {
            type: PropType<"desc" | "edit">;
            validator: (value: string) => boolean;
            default: string;
        };
        isShowHeader: {
            type: BooleanConstructor;
            default: boolean;
        };
        titleSlot: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowBack: {
            type: BooleanConstructor;
            default: boolean;
        };
        isGoBackEvent: {
            type: BooleanConstructor;
            default: boolean;
        };
        btnSaveBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        btnCancelBind: {
            type: ObjectConstructor;
            default: () => {};
        };
        isTabMargin: {
            type: BooleanConstructor;
            default: boolean;
        };
        tabMarginNum: {
            type: NumberConstructor;
            default: number;
        };
        footer: ObjectConstructor;
        title: StringConstructor;
        subTitle: StringConstructor;
        tabs: any[];
        submit: FunctionConstructor;
    }>> & {
        onValidateError?: ((...args: any[]) => any) | undefined;
        onBack?: ((...args: any[]) => any) | undefined;
        onTabsChange?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        clearValidate: () => void;
        resetFormFields: () => void;
        updateFormFields: () => void;
        setSelectedTab: (key: any) => void;
        saveHandle: () => Promise<void>;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    handleType: {
        type: PropType<"desc" | "edit">;
        validator: (value: string) => boolean;
        default: string;
    };
    isShowHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    titleSlot: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    isGoBackEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    btnSaveBind: {
        type: ObjectConstructor;
        default: () => {};
    };
    btnCancelBind: {
        type: ObjectConstructor;
        default: () => {};
    };
    isTabMargin: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabMarginNum: {
        type: NumberConstructor;
        default: number;
    };
    footer: ObjectConstructor;
    title: StringConstructor;
    subTitle: StringConstructor;
    tabs: any[];
    submit: FunctionConstructor;
}>> & {
    onValidateError?: ((...args: any[]) => any) | undefined;
    onBack?: ((...args: any[]) => any) | undefined;
    onTabsChange?: ((...args: any[]) => any) | undefined;
}, {
    clearValidate: () => void;
    resetFormFields: () => void;
    updateFormFields: () => void;
    setSelectedTab: (key: any) => void;
    saveHandle: () => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("validateError" | "back" | "tabsChange")[], "validateError" | "back" | "tabsChange", {
    handleType: "desc" | "edit";
    isShowHeader: boolean;
    titleSlot: boolean;
    isShowBack: boolean;
    isGoBackEvent: boolean;
    btnSaveBind: Record<string, any>;
    btnCancelBind: Record<string, any>;
    isTabMargin: boolean;
    tabMarginNum: number;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: Record<NonNullable<string | number>, any> & Record<any, {}> & Record<any, {}> & {
        title: (_: {}) => any;
        extra: (_: {}) => any;
        default: (_: {}) => any;
        footer: (_: {}) => any;
    };
});
export default _default;
