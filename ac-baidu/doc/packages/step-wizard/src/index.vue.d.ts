declare const _default: import("vue").DefineComponent<{
    stepData: {
        type: any[];
        default: () => never[];
        required: true;
    };
    successTitle: {
        type: StringConstructor;
        default: string;
    };
    lastBtnTitle: {
        type: StringConstructor;
        default: string;
    };
    active: {
        type: NumberConstructor;
        default: number;
        required: true;
    };
    isShowLastSuccess: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "complete"[], "complete", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    stepData: {
        type: any[];
        default: () => never[];
        required: true;
    };
    successTitle: {
        type: StringConstructor;
        default: string;
    };
    lastBtnTitle: {
        type: StringConstructor;
        default: string;
    };
    active: {
        type: NumberConstructor;
        default: number;
        required: true;
    };
    isShowLastSuccess: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onComplete?: ((...args: any[]) => any) | undefined;
}, {
    active: number;
    stepData: any;
    successTitle: string;
    lastBtnTitle: string;
    isShowLastSuccess: boolean;
}, {}>;
export default _default;
