declare const TSelectTable: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            table?: Record<string, any> | undefined;
            modelValue?: string | number | boolean | Record<string, any> | unknown[] | undefined;
            reserveSelection?: boolean | undefined;
            columns?: any;
            rowClickRadio?: boolean | undefined;
            isShowPagination?: boolean | undefined;
            isKeyup?: boolean | undefined;
            multiple?: boolean | undefined;
            filterable?: boolean | undefined;
            inputValue?: string | number | boolean | Record<string, any> | unknown[] | undefined;
            isShowInput?: boolean | undefined;
            inputWidth?: string | number | undefined;
            inputAttr?: Record<string, any> | undefined;
            radioTxt?: string | undefined;
            isShowQuery?: boolean | undefined;
            isClearQuery?: boolean | undefined;
            isShowBlurBtn?: boolean | undefined;
            btnBind?: Record<string, any> | undefined;
            isShowFirstColumn?: boolean | undefined;
            keywords?: Record<string, any> | undefined;
            selectWidth?: string | number | undefined;
            tableWidth?: string | number | undefined;
            selfExpanded?: boolean | undefined;
            isExpanded?: boolean | undefined;
            defaultSelectVal?: unknown[] | undefined;
            ref?: import("vue").VNodeRef | undefined;
            style?: unknown;
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
            readonly value?: string | number | unknown[] | undefined;
            readonly selectable?: Function | undefined;
            readonly filterMethod?: Function | undefined;
            "onPage-change"?: ((...args: any[]) => any) | undefined;
            onRadioChange?: ((...args: any[]) => any) | undefined;
            onSelectionChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:inputValue"?: ((...args: any[]) => any) | undefined;
            "onInput-focus"?: ((...args: any[]) => any) | undefined;
            "onInput-blur"?: ((...args: any[]) => any) | undefined;
            "onInput-clear"?: ((...args: any[]) => any) | undefined;
            "onInput-click"?: ((...args: any[]) => any) | undefined;
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
        $emit: (event: "page-change" | "radioChange" | "selectionChange" | "update:inputValue" | "input-focus" | "input-blur" | "input-clear" | "input-click", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            inputValue: {
                type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor | ArrayConstructor)[];
                default: undefined;
            };
            modelValue: {
                type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor | ArrayConstructor)[];
                default: undefined;
            };
            isShowInput: {
                type: BooleanConstructor;
                default: boolean;
            };
            inputWidth: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            inputAttr: {
                type: ObjectConstructor;
                default: () => {};
            };
            value: {
                type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
            };
            table: {
                type: ObjectConstructor;
                default: () => {};
            };
            columns: {
                type: any[];
                default: () => never[];
            };
            radioTxt: {
                type: StringConstructor;
                default: string;
            };
            isShowQuery: {
                type: BooleanConstructor;
                default: boolean;
            };
            isClearQuery: {
                type: BooleanConstructor;
                default: boolean;
            };
            isShowBlurBtn: {
                type: BooleanConstructor;
                default: boolean;
            };
            btnBind: {
                type: ObjectConstructor;
                default: () => {
                    btnTxt: string;
                };
            };
            rowClickRadio: {
                type: BooleanConstructor;
                default: boolean;
            };
            isShowFirstColumn: {
                type: BooleanConstructor;
                default: boolean;
            };
            filterable: {
                type: BooleanConstructor;
                default: boolean;
            };
            reserveSelection: {
                type: BooleanConstructor;
                default: boolean;
            };
            isShowPagination: {
                type: BooleanConstructor;
                default: boolean;
            };
            filterMethod: {
                type: FunctionConstructor;
            };
            keywords: {
                type: ObjectConstructor;
                default: () => {
                    label: string;
                    value: string;
                };
            };
            isKeyup: {
                type: BooleanConstructor;
                default: boolean;
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            selectWidth: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            tableWidth: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            selfExpanded: {
                type: BooleanConstructor;
                default: boolean;
            };
            isExpanded: {
                type: BooleanConstructor;
                default: boolean;
            };
            defaultSelectVal: {
                type: ArrayConstructor;
                default: () => never[];
            };
            selectable: FunctionConstructor;
        }>> & {
            "onPage-change"?: ((...args: any[]) => any) | undefined;
            onRadioChange?: ((...args: any[]) => any) | undefined;
            onSelectionChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:inputValue"?: ((...args: any[]) => any) | undefined;
            "onInput-focus"?: ((...args: any[]) => any) | undefined;
            "onInput-blur"?: ((...args: any[]) => any) | undefined;
            "onInput-clear"?: ((...args: any[]) => any) | undefined;
            "onInput-click"?: ((...args: any[]) => any) | undefined;
        }, {
            focus: () => void;
            blur: () => void;
            clear: () => void;
            props: {
                readonly table: Record<string, any>;
                readonly reserveSelection: boolean;
                readonly columns: any;
                readonly rowClickRadio: boolean;
                readonly isShowPagination: boolean;
                readonly isKeyup: boolean;
                readonly multiple: boolean;
                readonly filterable: boolean;
                readonly isShowInput: boolean;
                readonly inputWidth: string | number;
                readonly inputAttr: Record<string, any>;
                readonly radioTxt: string;
                readonly isShowQuery: boolean;
                readonly isClearQuery: boolean;
                readonly isShowBlurBtn: boolean;
                readonly btnBind: Record<string, any>;
                readonly isShowFirstColumn: boolean;
                readonly keywords: Record<string, any>;
                readonly selectWidth: string | number;
                readonly tableWidth: string | number;
                readonly selfExpanded: boolean;
                readonly isExpanded: boolean;
                readonly defaultSelectVal: unknown[];
                readonly value?: string | number | unknown[] | undefined;
                readonly modelValue?: string | number | boolean | Record<string, any> | unknown[] | undefined;
                readonly selectable?: Function | undefined;
                readonly filterMethod?: Function | undefined;
                readonly inputValue?: string | number | boolean | Record<string, any> | unknown[] | undefined;
            };
            tQueryConditionRef: any;
            selectRef: any;
            selectTable: any;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("page-change" | "radioChange" | "selectionChange" | "update:inputValue" | "input-focus" | "input-blur" | "input-clear" | "input-click")[], string, {
            table: Record<string, any>;
            modelValue: string | number | boolean | Record<string, any> | unknown[];
            reserveSelection: boolean;
            columns: any;
            rowClickRadio: boolean;
            isShowPagination: boolean;
            isKeyup: boolean;
            multiple: boolean;
            filterable: boolean;
            inputValue: string | number | boolean | Record<string, any> | unknown[];
            isShowInput: boolean;
            inputWidth: string | number;
            inputAttr: Record<string, any>;
            radioTxt: string;
            isShowQuery: boolean;
            isClearQuery: boolean;
            isShowBlurBtn: boolean;
            btnBind: Record<string, any>;
            isShowFirstColumn: boolean;
            keywords: Record<string, any>;
            selectWidth: string | number;
            tableWidth: string | number;
            selfExpanded: boolean;
            isExpanded: boolean;
            defaultSelectVal: unknown[];
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
        inputValue: {
            type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor | ArrayConstructor)[];
            default: undefined;
        };
        modelValue: {
            type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor | ArrayConstructor)[];
            default: undefined;
        };
        isShowInput: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        inputAttr: {
            type: ObjectConstructor;
            default: () => {};
        };
        value: {
            type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        };
        table: {
            type: ObjectConstructor;
            default: () => {};
        };
        columns: {
            type: any[];
            default: () => never[];
        };
        radioTxt: {
            type: StringConstructor;
            default: string;
        };
        isShowQuery: {
            type: BooleanConstructor;
            default: boolean;
        };
        isClearQuery: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowBlurBtn: {
            type: BooleanConstructor;
            default: boolean;
        };
        btnBind: {
            type: ObjectConstructor;
            default: () => {
                btnTxt: string;
            };
        };
        rowClickRadio: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowFirstColumn: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterable: {
            type: BooleanConstructor;
            default: boolean;
        };
        reserveSelection: {
            type: BooleanConstructor;
            default: boolean;
        };
        isShowPagination: {
            type: BooleanConstructor;
            default: boolean;
        };
        filterMethod: {
            type: FunctionConstructor;
        };
        keywords: {
            type: ObjectConstructor;
            default: () => {
                label: string;
                value: string;
            };
        };
        isKeyup: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        selectWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        tableWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        selfExpanded: {
            type: BooleanConstructor;
            default: boolean;
        };
        isExpanded: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultSelectVal: {
            type: ArrayConstructor;
            default: () => never[];
        };
        selectable: FunctionConstructor;
    }>> & {
        "onPage-change"?: ((...args: any[]) => any) | undefined;
        onRadioChange?: ((...args: any[]) => any) | undefined;
        onSelectionChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:inputValue"?: ((...args: any[]) => any) | undefined;
        "onInput-focus"?: ((...args: any[]) => any) | undefined;
        "onInput-blur"?: ((...args: any[]) => any) | undefined;
        "onInput-clear"?: ((...args: any[]) => any) | undefined;
        "onInput-click"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        focus: () => void;
        blur: () => void;
        clear: () => void;
        props: {
            readonly table: Record<string, any>;
            readonly reserveSelection: boolean;
            readonly columns: any;
            readonly rowClickRadio: boolean;
            readonly isShowPagination: boolean;
            readonly isKeyup: boolean;
            readonly multiple: boolean;
            readonly filterable: boolean;
            readonly isShowInput: boolean;
            readonly inputWidth: string | number;
            readonly inputAttr: Record<string, any>;
            readonly radioTxt: string;
            readonly isShowQuery: boolean;
            readonly isClearQuery: boolean;
            readonly isShowBlurBtn: boolean;
            readonly btnBind: Record<string, any>;
            readonly isShowFirstColumn: boolean;
            readonly keywords: Record<string, any>;
            readonly selectWidth: string | number;
            readonly tableWidth: string | number;
            readonly selfExpanded: boolean;
            readonly isExpanded: boolean;
            readonly defaultSelectVal: unknown[];
            readonly value?: string | number | unknown[] | undefined;
            readonly modelValue?: string | number | boolean | Record<string, any> | unknown[] | undefined;
            readonly selectable?: Function | undefined;
            readonly filterMethod?: Function | undefined;
            readonly inputValue?: string | number | boolean | Record<string, any> | unknown[] | undefined;
        };
        tQueryConditionRef: any;
        selectRef: any;
        selectTable: any;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    inputValue: {
        type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor | ArrayConstructor)[];
        default: undefined;
    };
    modelValue: {
        type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor | ArrayConstructor)[];
        default: undefined;
    };
    isShowInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    inputAttr: {
        type: ObjectConstructor;
        default: () => {};
    };
    value: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
    };
    table: {
        type: ObjectConstructor;
        default: () => {};
    };
    columns: {
        type: any[];
        default: () => never[];
    };
    radioTxt: {
        type: StringConstructor;
        default: string;
    };
    isShowQuery: {
        type: BooleanConstructor;
        default: boolean;
    };
    isClearQuery: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowBlurBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    btnBind: {
        type: ObjectConstructor;
        default: () => {
            btnTxt: string;
        };
    };
    rowClickRadio: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowFirstColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    reserveSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    isShowPagination: {
        type: BooleanConstructor;
        default: boolean;
    };
    filterMethod: {
        type: FunctionConstructor;
    };
    keywords: {
        type: ObjectConstructor;
        default: () => {
            label: string;
            value: string;
        };
    };
    isKeyup: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    tableWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    selfExpanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    isExpanded: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultSelectVal: {
        type: ArrayConstructor;
        default: () => never[];
    };
    selectable: FunctionConstructor;
}>> & {
    "onPage-change"?: ((...args: any[]) => any) | undefined;
    onRadioChange?: ((...args: any[]) => any) | undefined;
    onSelectionChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:inputValue"?: ((...args: any[]) => any) | undefined;
    "onInput-focus"?: ((...args: any[]) => any) | undefined;
    "onInput-blur"?: ((...args: any[]) => any) | undefined;
    "onInput-clear"?: ((...args: any[]) => any) | undefined;
    "onInput-click"?: ((...args: any[]) => any) | undefined;
}, {
    focus: () => void;
    blur: () => void;
    clear: () => void;
    props: {
        readonly table: Record<string, any>;
        readonly reserveSelection: boolean;
        readonly columns: any;
        readonly rowClickRadio: boolean;
        readonly isShowPagination: boolean;
        readonly isKeyup: boolean;
        readonly multiple: boolean;
        readonly filterable: boolean;
        readonly isShowInput: boolean;
        readonly inputWidth: string | number;
        readonly inputAttr: Record<string, any>;
        readonly radioTxt: string;
        readonly isShowQuery: boolean;
        readonly isClearQuery: boolean;
        readonly isShowBlurBtn: boolean;
        readonly btnBind: Record<string, any>;
        readonly isShowFirstColumn: boolean;
        readonly keywords: Record<string, any>;
        readonly selectWidth: string | number;
        readonly tableWidth: string | number;
        readonly selfExpanded: boolean;
        readonly isExpanded: boolean;
        readonly defaultSelectVal: unknown[];
        readonly value?: string | number | unknown[] | undefined;
        readonly modelValue?: string | number | boolean | Record<string, any> | unknown[] | undefined;
        readonly selectable?: Function | undefined;
        readonly filterMethod?: Function | undefined;
        readonly inputValue?: string | number | boolean | Record<string, any> | unknown[] | undefined;
    };
    tQueryConditionRef: any;
    selectRef: any;
    selectTable: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("page-change" | "radioChange" | "selectionChange" | "update:inputValue" | "input-focus" | "input-blur" | "input-clear" | "input-click")[], "page-change" | "radioChange" | "selectionChange" | "update:inputValue" | "input-focus" | "input-blur" | "input-clear" | "input-click", {
    table: Record<string, any>;
    modelValue: string | number | boolean | Record<string, any> | unknown[];
    reserveSelection: boolean;
    columns: any;
    rowClickRadio: boolean;
    isShowPagination: boolean;
    isKeyup: boolean;
    multiple: boolean;
    filterable: boolean;
    inputValue: string | number | boolean | Record<string, any> | unknown[];
    isShowInput: boolean;
    inputWidth: string | number;
    inputAttr: Record<string, any>;
    radioTxt: string;
    isShowQuery: boolean;
    isClearQuery: boolean;
    isShowBlurBtn: boolean;
    btnBind: Record<string, any>;
    isShowFirstColumn: boolean;
    keywords: Record<string, any>;
    selectWidth: string | number;
    tableWidth: string | number;
    selfExpanded: boolean;
    isExpanded: boolean;
    defaultSelectVal: unknown[];
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: Record<NonNullable<string | number>, any> & Record<any, {
        scope: any;
    }> & {
        querybar: (_: {}) => any;
        toolbar: (_: {}) => any;
        default: (_: {}) => any;
        footer: (_: {}) => any;
    };
}) & import("vue").Plugin<any[]>) & Record<string, any>;
export default TSelectTable;
