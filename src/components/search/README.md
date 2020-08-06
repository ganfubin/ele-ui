### search组件
配合table 使用
```javascript
search: [
    {
      type: 'BUTTON', // 类型 [BUTTON, SELECT, QUERY]
      attrs: { // attrs 参数
        label: '我是一个按钮',
        style: 'color: #0062DD',
        standout: 'bg-teal text-white',
      },
      methods: { // 暴露出来的方法
        click: () => {
          console.log(this);
        },
      },
    },
    {
      type: 'SELECT',
      key: '',
      attrs: {
        label: '我是一个搜索',
        style: 'width: 60px',
        dense: true,
        optionsDense: true,
        options: [
          'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle',
        ],
      },
      methods: {
        input: (data) => { // z这个返回参数data 返回是 {key: 'xx', key1: 'xx'}
          console.log(this, data);
        },
      },
    },
    {
      type: 'QUERY', // type === 'QUERY' 加了节流操作
      key: 'key1',
      attrs: {
        label: '我是一个query',
        style: 'width: 80px',
      },
      methods: {
        input: (data) => {
          console.log(this, data);
        },
        
      },
    },
  ],

```

```javascript
对比较常用的字段解释
key：表示对这个类型传出值的键值key

```