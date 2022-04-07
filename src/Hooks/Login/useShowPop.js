import { ref } from "vue";

export default function(){
  const show = ref(false);
  const showPop = () => {
    show.value = true
  }
  const clousePop = function(){
    show.value = false
  }
  return {
    show,
    showPop,
    clousePop
  }
}