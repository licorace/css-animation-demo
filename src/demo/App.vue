<template>
  <div class="container">
    <div class="btncontainer">
      <btn-cart
        v-for="(item, index) of 3"
        :key="index"
        :item="item"
        class="btncart"
        @additem="addcartitem"
      ></btn-cart>
    </div>

    <ball-animation
      :balls="balls"
      :initial_style_length="initial_style_length"
      @resetBallState="resetBallState"
    ></ball-animation>

    <shop-cart :isActive="isActive" :rednum="rednum"></shop-cart>
  </div>
</template>

<script setup>
import ShopCart from "./ShopCart.vue"
import BtnCart from "./btnCart.vue"
import BallAnimation from "./BallAnimation.vue"

let initial_style_length = document.styleSheets[0].cssRules.length

import { rednum, balls, dropBalls, isActive } from "./config"

const addcartitem = (event) => {
  drop(event.target)
  rednum.value++
  isActive.value = true
}

const drop = (el) => {
  //抛物
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i]
    if (!ball.show) {
      //当小球显示状态为隐藏时
      ball.show = true //将这个小球的显示状态设置为true
      ball.el = el // 将cartControl传过来的对象挂载到ball的el属性上
      dropBalls.push(ball) // 将这个小球放入到dropBalls数组中
      return
    }
  }
}

const resetBallState = (el) => {
  let ball = dropBalls.shift() // 完成一次动画就删除一个dropBalls的小球
  if (ball) {
    ball.show = false
    el.style.display = "none" //完成一次之后就让小球隐藏
    ball.el = ""
  }
  isActive.value = false
}
</script>

<style scoped>
.btncontainer {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 300px;
  left: 400px;
}

.btncart {
  margin: 50px 0;
}
</style>
