declare const _default: import("vue").DefineComponent<{
    item: {
        type: ObjectConstructor;
        default: () => {};
        required: true;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "handleEvent"[], "handleEvent", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: ObjectConstructor;
        default: () => {};
        required: true;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onHandleEvent?: ((...args: any[]) => any) | undefined;
}, {
    item: Record<string, any>;
    align: string;
}, {}>;
export default _default;
