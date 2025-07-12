declare const _default: import("vue").DefineComponent<{
    /** 编辑配置项说明
     * label: '爱好', // placeholder显示
     * editComponent: 'el-select', // 组件
     * type: 'select-arr', // option显示
     * list: 'hobbyList', // 下拉选择数据源
     * arrLabel: 'label', // 下拉选择中文显示
     * arrKey: 'value' // 下拉选择number显示（最终传后台）
     * bind:{} // 组件衍生属性（即第三方组件属性）
     */
    configEdit: {
        type: any;
        default: () => {};
    };
    listTypeInfo: {
        type: ObjectConstructor;
        default: () => {};
    };
    scope: {
        type: ObjectConstructor;
        default: () => {};
    };
    prop: {
        type: StringConstructor;
        default: string;
    };
    isShowRules: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | ObjectConstructor | DateConstructor | StringConstructor | ArrayConstructor)[];
    };
    indexColumns: (NumberConstructor | StringConstructor)[];
}, {
    resetTselectTableFields: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("handleEvent" | "update:modelValue" | "keyupHandle")[], "handleEvent" | "update:modelValue" | "keyupHandle", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** 编辑配置项说明
     * label: '爱好', // placeholder显示
     * editComponent: 'el-select', // 组件
     * type: 'select-arr', // option显示
     * list: 'hobbyList', // 下拉选择数据源
     * arrLabel: 'label', // 下拉选择中文显示
     * arrKey: 'value' // 下拉选择number显示（最终传后台）
     * bind:{} // 组件衍生属性（即第三方组件属性）
     */
    configEdit: {
        type: any;
        default: () => {};
    };
    listTypeInfo: {
        type: ObjectConstructor;
        default: () => {};
    };
    scope: {
        type: ObjectConstructor;
        default: () => {};
    };
    prop: {
        type: StringConstructor;
        default: string;
    };
    isShowRules: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | ObjectConstructor | DateConstructor | StringConstructor | ArrayConstructor)[];
    };
    indexColumns: (NumberConstructor | StringConstructor)[];
}>> & {
    onHandleEvent?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onKeyupHandle?: ((...args: any[]) => any) | undefined;
}, {
    prop: string;
    configEdit: any;
    listTypeInfo: Record<string, any>;
    scope: Record<string, any>;
    isShowRules: boolean;
}, {}>;
export default _default;
