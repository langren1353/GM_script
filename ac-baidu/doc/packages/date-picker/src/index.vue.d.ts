import type { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (DateConstructor | StringConstructor | ArrayConstructor)[];
    };
    plusTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    /***
     * week周；month月；year年；dates多个日期；months多个月；years多个年；daterange日期范围；monthrange月份范围
     * datetime日期和时间点;datetimerange日期和时间点范围
     */
    type: {
        type: PropType<"date" | "week" | "month" | "year" | "dates" | "months" | "years" | "daterange" | "monthrange" | "datetime" | "datetimerange">;
        validator: (value: string) => boolean;
        default: string;
    };
    shortcuts: {
        type: ArrayConstructor;
    };
    isPickerOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    state: {
        dateOptions: unknown[] | undefined;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (DateConstructor | StringConstructor | ArrayConstructor)[];
    };
    plusTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    /***
     * week周；month月；year年；dates多个日期；months多个月；years多个年；daterange日期范围；monthrange月份范围
     * datetime日期和时间点;datetimerange日期和时间点范围
     */
    type: {
        type: PropType<"date" | "week" | "month" | "year" | "dates" | "months" | "years" | "daterange" | "monthrange" | "datetime" | "datetimerange">;
        validator: (value: string) => boolean;
        default: string;
    };
    shortcuts: {
        type: ArrayConstructor;
    };
    isPickerOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: "date" | "week" | "month" | "year" | "dates" | "months" | "years" | "daterange" | "monthrange" | "datetime" | "datetimerange";
    plusTime: boolean;
    isPickerOptions: boolean;
}, {}>;
export default _default;
