export default {
  name: 'render',
  functional: true,
  props: {
    render: Function,
    prevent: Function,
    data: {
      type: Object,
      default: {},
    },
  },
  render: (h, ctx) => {
    const { data } = ctx.props;
    const render = ctx.props.render(h, data);
    return h('div', {
      on: {
        ...ctx.listeners,
      },
      attrs: {
        ...ctx.attrs,
      },
    }, [h('span', {}, [render])]);
  },
};
