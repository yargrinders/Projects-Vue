Vue.createApp ({
  data (){
    return {
      Title: 'Hello Vue Cart!',
      product: 'Socks',
      image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
      inStock: true,
      inventory: 100,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
        }
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'], 
      cart: 0
    }
  },
  methods: {
    addToCart(){
      this.cart += 1
    },
    delFromCart() {
      this.cart -= 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  },
}).mount('#app');
