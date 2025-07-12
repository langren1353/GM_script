<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "RenderTooltip",
  props: {
    render: Function,
    item: Object
  },
  render(ctx: { render: (arg0: any) => any; item: any }) {
    // console.log("ctx", ctx)
    return ctx.render(ctx?.item)
  }
})
</script>
