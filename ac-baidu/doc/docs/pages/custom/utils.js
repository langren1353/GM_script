import { reactive } from "vue";

export const initEnv = () => {
  if(!window.myEvent) {
    window.myEvent = reactive({
      list: []
    })
  }
}
