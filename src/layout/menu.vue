<template>
  <div class="layout-menu">
    <template v-for="(menu, index) in menus ">
      <div class="menu-item" :class="[menu.active ? 'active': '']" :key="index" @click="menuClick(index, menu)">{{menu.title}}</div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "menu.vue",
    props: {
      menus: Array
    },
    data() {
      return {
      }
    },
    methods: {
      menuClick(menuIndex, menu) {
        let menus = [...this.menus].map((item, index) => {
          return {
            ...item,
            active: index === menuIndex
          }
        })
        this.$emit('update:menus', menus)
        this.$emit('onMenuClick', menu)
      }
    }
  }
</script>

<style lang="less" scoped>
  .layout-menu {
    padding: 20px 0 0 10px;
    .menu-item {
      height: 40px;
      line-height: 40px;
      color: #444;
      cursor: pointer;
      font-size: 14px;
      &:hover {
        color: #409eff;
      }
      &.active {
        color: #409eff;
      }
    }
  }
</style>
