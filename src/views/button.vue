<template>
  <div class="page-button">
    <u-button type="primary" @click="handleClick">防抖按钮</u-button>
    <el-button type="primary" @click="handleClick">普通按钮</el-button>
    <el-button type="primary" @click="handleClick">click值：{{num}}</el-button>

    <div v-html="uButtonMd"></div>
  </div>
</template>

<script>
import UButton from '../components/button/index.vue';

export default {
  name: 'button.vue',
  components: {
    UButton,
  },
  data() {
    return {
      uButtonMd: require('../components/button/button.md'),
      num: 0,
    };
  },
  methods: {
    handleClick() {
      this.num += 1;
    },
  },
};
</script>

<style scoped>

</style>
