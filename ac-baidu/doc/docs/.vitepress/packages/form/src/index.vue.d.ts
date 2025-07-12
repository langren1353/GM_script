import type { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    className: {
        type: StringConstructor;
    };
    /** 表单配置项说明
     * formData object 表单提交数据
     * rules object 验证规则
     * fieldList Array 表单渲染数据
     * operatorList Array 操作按钮list
     * listTypeInfo object 下拉选项数据
     * labelWidth  String label宽度
     */
    formOpts: {
        type: ObjectConstructor;
        default: () => {};
    };
    widthSize: {
        type: PropType<3 | 1 | 2 | 4 | 5 | 6>;
        validator: (value: number) => boolean;
        default: number;
    };
    isTrim: {
        type: BooleanConstructor;
        default: boolean;
    };
}, any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("handleEvent" | "update:modelValue" | "getRefs")[], "handleEvent" | "update:modelValue" | "getRefs", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    className: {
        type: StringConstructor;
    };
    /** 表单配置项说明
     * formData object 表单提交数据
     * rules object 验证规则
     * fieldList Array 表单渲染数据
     * operatorList Array 操作按钮list
     * listTypeInfo object 下拉选项数据
     * labelWidth  String label宽度
     */
    formOpts: {
        type: ObjectConstructor;
        default: () => {};
    };
    widthSize: {
        type: PropType<3 | 1 | 2 | 4 | 5 | 6>;
        validator: (value: number) => boolean;
        default: number;
    };
    isTrim: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onHandleEvent?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onGetRefs?: ((...args: any[]) => any) | undefined;
}, {
    widthSize: 3 | 1 | 2 | 4 | 5 | 6;
    formOpts: Record<string, any>;
    isTrim: boolean;
}, {}>;
export default _default;
