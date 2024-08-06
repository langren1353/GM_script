declare const _default: import("vue").DefineComponent<{
    formOpts: {
        type: ObjectConstructor;
        default: () => {};
    };
    titleBold: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    getChildRef: (index: string | number) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "handleEvent"[], "handleEvent", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    formOpts: {
        type: ObjectConstructor;
        default: () => {};
    };
    titleBold: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onHandleEvent?: ((...args: any[]) => any) | undefined;
}, {
    formOpts: Record<string, any>;
    titleBold: boolean;
}, {}>;
export default _default;
