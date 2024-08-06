<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "RenderCol",
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render(ctx: {
    row: { [x: string]: any }
    index: any
    column: { prop: string | number }
    render: (arg0: any, arg1: any, arg2: any) => any
  }) {
    // console.log(111, ctx)
    const params: any = {
      row: ctx.row,
      index: ctx.index
    }
    if (ctx.column) params.column = ctx.column
    return ctx.render(ctx?.row[ctx?.column?.prop], ctx.row, ctx.index)
  }
})
</script>
