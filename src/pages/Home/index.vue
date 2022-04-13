<template>
  <div>
    <TypeNav />
    <!--列表-->
    <ListContainer />
    <!--今日推荐-->
    <Recommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--楼层-->
    <!-- 父传子proprs方法 -->
    <Floor v-for="(floor, i) in floorList" :key="floor.id" :list="floor" />

    <!--商标-->
    <Brand />
  </div>
</template>

<script>
import Brand from "./Brand/Brand";
import Floor from "./Floor/Floor";
import Like from "./Like/Like";
import Rank from "./Rank/Rank";
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import { mapState } from "vuex";

export default {
  components: {
    ListContainer,
    Recommend,
    Brand,
    Floor,
    Like,
    Rank,
  },
  mounted() {
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floorList: (stata) => stata.home.floorList,
    }),
  },
};
</script>

<style>
</style>