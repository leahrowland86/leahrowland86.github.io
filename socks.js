let app = new Vue({
  el: "#app",
  data: {
    product: 'Socks',
    brand: 'Vue Mastery',
    selectedVariant: 0,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 1234,
        variantColor: 'green',
        variantImage:'./images/greensocks.png',
        variantQuantity: 10
      },
      {
      variantId: 1235,
      variantColor: 'blue',
      variantImage:'./images/bluesocks.png',
      variantQuantity: 0
    }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    }
  }
})
