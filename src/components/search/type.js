/**
 * 搜索组件包含的类型 {
 *   button: 按钮，
 *   buttonMore: 按钮下拉，
 *   select： 下拉框，
 *   cascader: 级联，
 *   timeSelect: 时间选择
 *   datePicker: 日期选择
 * }
 */
export default {
  BUTTON: {
    attrs: {

    },
  },
  SELECT: {
    attrs: {
      placeholder: '请选择',
      options: [],
    },
  },
  DATE: {
    attrs: {
      placeholder: '请选择',
    },
  },
  CASCADER: {
    attrs: {

    },
  },
  QUERY: {
    attrs: {
      placeholder: '请输入',
    },
  },
};
