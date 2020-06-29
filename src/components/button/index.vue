<template>
  <el-button @click="handleClick" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-button>
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      handleClick() {

      }
    },
  };
</script>
