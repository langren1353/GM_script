<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "RenderComp",
  props: {
    render: Function,
    form: Object
  },
  render(ctx: { render: (arg0: any) => any; form: any }) {
    return ctx.render(ctx?.form)
  }
})
</script>
