declare const _default: import("vue").DefineComponent<{
    columns: {
        type: ArrayConstructor;
        default: () => never[];
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    columnSetBind: {
        type: ObjectConstructor;
        default: () => void;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "columnSetting"[], "columnSetting", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: ArrayConstructor;
        default: () => never[];
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    columnSetBind: {
        type: ObjectConstructor;
        default: () => void;
    };
}>> & {
    onColumnSetting?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    name: string;
    columns: unknown[];
    columnSetBind: Record<string, any>;
}, {}>;
export default _default;
