declare const _default: import("vue").DefineComponent<{
    descColumn: {
        type: NumberConstructor;
        default: number;
    };
    dataList: {
        type: ObjectConstructor;
        default: () => {};
    };
    listTypeInfo: {
        type: ObjectConstructor;
        default: () => {};
    };
    descData: {
        type: any[];
        default: () => never[];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    descColumn: {
        type: NumberConstructor;
        default: number;
    };
    dataList: {
        type: ObjectConstructor;
        default: () => {};
    };
    listTypeInfo: {
        type: ObjectConstructor;
        default: () => {};
    };
    descData: {
        type: any[];
        default: () => never[];
    };
}>>, {
    listTypeInfo: Record<string, any>;
    descColumn: number;
    dataList: Record<string, any>;
    descData: any;
}, {}>;
export default _default;
