<template>
  <div v-for="(ball, index) in props.balls" :key="index">
    <transition name="fade" @before-enter="beforeDrop" @after-enter="afterDrop">
      <div v-show="ball.show" class="ball"></div>
    </transition>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue"
const props = defineProps({
  balls: Array,
  initial_style_length: Number,
  // dropBalls: Array,
  // isActive: Boolean,
})

const emit = defineEmits(["resetBallState"])

const beforeDrop = () => {
  /* 购物车小球动画实现 */
  let rednum = props.balls.length
  // isActive.value = true

  while (rednum--) {
    let ball = props.balls[rednum]
    if (ball.show) {
      let rect = ball.el.getBoundingClientRect() //元素相对于视口的位置
      // let cartrect = cart.value.getBoundingClientRect()
      // console.log(cartrect)

      let from_x = rect.x + 5
      let to_x = 32 + 5

      let from_y = rect.y
      let to_y = 917 + 5

      let style = document.styleSheets[0]

      let nowtime_style_length = style.cssRules.length
      if (nowtime_style_length > props.initial_style_length) {
        style.deleteRule(0)
        style.deleteRule(0)
      }

      style.insertRule(
        `@keyframes run-right-top {
          0% {
            top: ${from_y}px;
          }

          100% {
            top: ${to_y}px;
          }
        }
        `,
        0
      )
      style.insertRule(
        `@keyframes run-right-right {
          0% {
            left: ${from_x}px;
          }

          100% {
            left: ${to_x}px;
          }
        }
        `,
        0
      )
    }
  }
}

const afterDrop = (el) => {
  /*初始化小球*/
  emit("resetBallState", el)
}
</script>

<style scoped>
/* //定义动画的流程 */
.ball {
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: greenyellow;
  position: fixed;
  left: 32px;
  bottom: 22px;

  animation: run-right-right 600ms 1 linear,
    run-right-top 600ms 1 cubic-bezier(0.26, -0.35, 0.92, 0.38);
  animation-fill-mode: forwards;
}
</style>
