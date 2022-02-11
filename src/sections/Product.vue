<template>
  <div>
    <Navbar />
    <div>
      <v-row>
        <h1>Products</h1>
      </v-row>
      <v-row
        class="ml-n5"
        align="center"
        dense
        no-gutters
        style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(24rem, auto));
        "
      >
        <div >
          <v-col
            cols="auto"
            class="fill-height justify-center align-center"
            align="center"
            v-for="product in products" :key="product.id"
          >
            <v-dialog
              v-model="dialog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
              >
            >
              <template v-slot:activator="{ on, attrs }">
                <v-card
                  min-height="250"
                  min-width="80"
                  max-width="500"
                  v-bind="attrs"
                  v-on="on"
                  @click="getIndividualProduct(product.id)"
                >
                  <v-img
                    v-bind:lazy-src="product.image"
                    max-height="150"
                    max-width="100%"
                    contain
                    v-bind:src="product.image"
                  ></v-img>

                  <br />
                  {{ product.title }}
                  <br />
                  Price: ${{ product.price }}
                </v-card>
              </template>
              <v-card align="center" justify="center">
                <v-toolbar>
                  <v-btn icon dark @click="dialog = false">
                    <v-icon color="black">mdi-close</v-icon>
                  </v-btn>
                </v-toolbar>
                <div justify="center" align="center">
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-img
                    v-bind:lazy-src="individualProduct.image"
                    max-height="150"
                    max-width="100%"
                    contain
                    v-bind:src="individualProduct.image"
                  ></v-img>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </v-dialog>
          </v-col>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "product",
  
  components: { Navbar },
  data() {
    
    return {
      id: 0,
      dialog: false,
      products: [],
      individualProduct: {},
    };
  },
  created() {
    this.getProducts();
  },

  methods: {
    getProducts() {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          this.products.push(...data);
        });
      console.log(this.products);
    },
    getIndividualProduct(id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.individualProduct = data;
        });
    },
  },
};
</script>

<style>
body {
  padding: 30px;
}
</style>

