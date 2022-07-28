export default {
  data() {
    return {
      a: true,
      list: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    click() {
      this.a = !this.a;
    },
  },
};
