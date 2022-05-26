import { ref, reactive } from "vue"

const rednum = ref(0)
const balls = reactive([
  //小球 设为5个 使用balls存放小球，这些小球的默认状态都是不显示的
  { show: false },
  { show: false },
  { show: false },
  { show: false },
  { show: false },
])

const dropBalls = reactive([])

const isActive = ref(false)

export { rednum, balls, dropBalls, isActive }
