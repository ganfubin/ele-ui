<template>
  <div class="u-search">
    <template v-for="(item, index) in search">
      <template v-if="item.type">
        <!-- render 类型 -->
        <template v-if="item.type === 'RENDER'">
          <div class="u-search-item" :key="index">
            <u-render :data="item" :render="item.render"></u-render>
          </div>
        </template>
        <!-- button 类型-->
        <template v-if="item.type === 'BUTTON'">
          <div class="u-search-item" :key="index">
            <u-button
              v-bind="{ ...Object.assign({}, type['BUTTON'].attrs, item.attrs)}"
              v-on="{...item.methods}">
              {{item.attrs.label}}
            </u-button>
          </div>
        </template>
        <!-- select 类型-->
        <template v-if="item.type === 'SELECT'">
          <div class="u-search-item" :key="index">
            <el-select
              v-model="model[item.key]"
              v-bind="{ ...Object.assign({}, type['SELECT'].attrs, item.attrs)}"
              @change="queryChange(item.methods, 'change')">
              <el-option
                v-for="item in item.attrs.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </template>

        <!-- date 类型 -->
        <template v-if="item.type === 'DATE'">
          <div class="u-search-item" :key="index">
            <el-date-picker
              v-model="model[item.key]"
              v-bind="{ ...Object.assign({}, type['DATE'].attrs, item.attrs)}"
              @change="queryChange(item.methods, 'change')">
            </el-date-picker>
          </div>
        </template>

        <!-- query 类型-->
        <template v-if="item.type === 'QUERY'">
          <div class="u-search-item u-search-item-query" :key="index">
            <el-input
              v-bind="{ ...Object.assign({}, type['QUERY'].attrs, item.attrs)}"
              @keyup.enter="queryChange(item.methods, 'enter')"
              @input="queryChange(item.methods, 'change')"
              v-model="model[item.key]">
            </el-input>
          </div>
        </template>
      </template>
    </template>
  </div>
</template>

<script>
import URender from '../render/index';
import UButton from '../button/index';
import type from './type';
import _ from 'lodash';

export default {
  components: {
    URender,
    UButton,
  },
  props: {
    search: {
      default: () => [],
    },
    debounce: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      type,
      queryChange: null,
      model: {},
    };
  },
  created() {
    this.queryChange = _.debounce(function (methods, eventType) {
      this.searchChange();
      const model = { ...this.model };
      // 在外部配置没有enter 事件时，可以触发input 事件
      if (methods[eventType]) {
        methods[eventType](model);
      } else if (methods.change) {
        methods.change(model);
      }
    }, this.debounce,
    { leading: false, trailing: true });
  },
  watch: {
    search: {
      immediate: true,
      deep: true,
      handler(search) {
        this.initSearch(search);
      },
    },
  },
  methods: {
    initSearch(search) {
      const findKeys = [...search].filter((item) => item.key);
      const model = {};
      findKeys.forEach((item) => {
        model[item.key] = item.default || '';
      });
      this.model = model;
    },
    // 给query 这种添加一个节流
    // queryChange: _.debounce(function (methods, eventType) {
    //     this.searchChange();
    //     const model = {...this.model};
    //     // 在外部配置没有enter 事件时，可以触发input 事件
    //     if (methods[eventType]) {
    //       methods[eventType](model);
    //     } else if (methods.change) {
    //       methods.change(model);
    //     }
    //   }, 800,
    //   {leading: false, trailing: true}),
    // 搜索条件发生变化
    searchChange() {
      this.$emit('change');
    },
  },
};
</script>

<style lang="less">
  .u-search {
    display: flex;
    align-items: center;

    .u-search-item + .u-search-item {
      margin-left: 10px;
    }
  }
</style>
