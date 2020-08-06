<template>
  <div>
    <u-search :search="search"></u-search>
    <div>{{model}}</div>
  </div>
</template>

<script>
import USearch from '../components/search/index.vue';

export default {
  name: 'search',
  components: {
    USearch,
  },
  data() {
    return {
      model: {},
      search: [
        {
          type: 'SELECT',
          key: 'key1',
          attrs: {
            label: '任务状态',
            options: [
              {
                value: '选项1',
                label: '黄金糕',
              }, {
                value: '选项2',
                label: '双皮奶',
              }, {
                value: '选项3',
                label: '蚵仔煎',
              }, {
                value: '选项4',
                label: '龙须面',
              }, {
                value: '选项5',
                label: '北京烤鸭',
              },
            ],
          },
          methods: {
            change: (data) => {
              this.model = data;
            },
          },
        },
        {
          type: 'QUERY',
          key: 'key2',
          methods: {
            change: (data) => {
              this.model = data;
            },
          },
        },
        {
          type: 'QUERY',
          key: 'key3',
          methods: {
            change: (data) => {
              this.model = data;
            },
          },
        },
        {
          type: 'DATE',
          key: 'key4',
          attrs: {
            type: 'daterange',
            rangeSeparator: '至',
            startPlaceholder: '开始日期',
            endPlaceholder: '结束日期',
          },
          methods: {
            change: (data) => {
              this.model = data;
            },
          },
        },
        {
          type: 'BUTTON',
          attrs: {
            label: '查询',
            type: 'primary',
            query: true,
          },
          methods: {
            click: () => {
              console.log(this.model);
            },
          },
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
