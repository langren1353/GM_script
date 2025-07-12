<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "RenderHeader",
  props: {
    render: Function,
    column: {
      type: Object,
      default: null
    }
  },
  render(ctx: { render: (arg0: any) => any; column: any }) {
    return ctx.render(ctx?.column)
  }
})
</script>
