<template>
  <el-button @click="clickFn" v-bind="$attrs">
    <slot></slot>
  </el-button>
</template>
<script>
import _ from 'lodash';

export default {
  props: {
    debounce: {
      type: Number,
      default: 300,
    },
  },
  data() {
    return {
      clickFn: null,
    };
  },
  created() {
    this.clickFn = _.debounce(() => {
      this.$emit('click');
    },
    this.debounce,
    { leading: true, trailing: false });
  },
};
</script>
