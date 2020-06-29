<template>
  <div class="layout">
    <div class="layout-warp">
      <div class="layout-header">
        <div class="layout-header_left layout-header_logo">VUE ELE UI</div>
        <div class="layout-header_right">基于element二次封装的ui组件</div>
      </div>
      <div class="layout-warp-context">
        <div class="layout-warp-container">
          <div class="layout-warp-container_left">
            <v-menu :menus.sync="menus" @onMenuClick="onMenuClick"></v-menu>
          </div>
          <div class="layout-warp-container_right">
            <component :is="comName"></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VMenu from './menu.vue'

  const menus = [
    {
      components: () => import('../views/button.vue'),
      name: 'VButton',
      title: 'Button 按钮',
      active: true
    },
    {
      components: () => import('../views/input.vue'),
      title: 'Input 输入',
      active: false
    }, {
      components: () => import('../views/search.vue'),
      title: 'Search 搜索组件',
      active: false
    }, {
      components: () => import('../views/page.vue'),
      title: 'Page 分页',
      active: false
    }, {
      components: () => import('../views/table.vue'),
      title: 'Table 表格',
      active: false
    }]
  const components = {};
  menus.forEach((menu) => {
    if (menu.components) {
      components[menu.name] = menu.components
    }
  })
  export default {
    name: "index.vue",
    components: {
      VMenu,
      ...components
    },
    data() {
      return {
        menus,
        comName: 'VButton'
      }
    },
    methods: {
      onMenuClick(menu) {
        if (menu.name && menu.components) {
          this.comName = menu.name
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .layout {
    height: 100vh;

    .layout-warp {
      display: flex;
      height: 100%;
      flex-direction: column;
    }

    .layout-header {
      height: 80px;
      border-bottom: 1px solid #dcdfe6;
      display: flex;
      line-height: 80px;
      width: 1200px;
      margin: 0 auto;
    }

    .layout-header_left {
      font-size: 20px;
      color: #2d2d2d;
    }

    .layout-header_right {
      font-size: 12px;
      color: #9c9c9c;
      margin-left: 20px;
      padding-top: 3px;
    }

    .layout-warp-context {
      overflow-y: auto;
      flex: 1;
    }

    .layout-warp-container {
      display: flex;
      width: 1200px;
      margin: 0 auto;
      height: 100%;
    }

    .layout-warp-container_left {
      width: 200px;
      height: 100%;
    }

    .layout-warp-container_right {
      flex: 1;
      padding-top: 20px;
    }
  }
</style>
