<template>
    <div>
        <h1>TestVuex.vue</h1>
        Test-1:
        <p>Count: {{ $store.state.count }}</p>
        <button @click="updateCount">increment</button>
        <hr />
        depletedProducts:
        <ul>
            <li v-for="(product, i) in depletedProducts" :key="i">
                name: {{ product.name }}
                , ID : {{ product.id }}
            </li>
        </ul>        
    </div>
</template>

<!-- -->
<script>

export default {
    created(){
        console.log( "count =" + this.$store.state.count )

    },
    computed: {
        depletedProducts() {
            return this.$store.getters.depletedProducts;
        }
    },
  methods: {
    updateCount() {
      this.$store.commit("increment");
    }
  }        
}
</script>
