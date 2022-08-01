
export default {
  data() {
    return {
      a: true,
      list: [1, 2, 3, 4, 5],
      isActive: true,
      isError: false
    }
  },
  methods: {
    click() {
      this.a = !this.a
    },
    change() {
      this.isActive = !this.isActive
      this.isError = !this.isError
    }
  }
}
