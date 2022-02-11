<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col md="4">
          <div>
            <h1>Online Shop</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              error numquam, repellendus accusamus placeat aspernatur ullam
              cupiditate corporis minima fugit dolorem laudantium hic dolorum
              provident cumque natus quidem aliquid similique?
            </p>
            <div>
              <v-btn color="primary" class="ma-2" dark @click.stop="showDialog=true">
                Explore
              </v-btn>
              <Login v-model="showDialog" />
              <v-btn color="primary" class="ma-2" dark @click="dialog2 = true">
                Get Started
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col md="4">
          <div>
            <p>image</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Login from './Login.vue'
export default {
  name: "Landing",
  props: {
    msg: String,
  },
  components: {Login},
  data () {
      return {
          showDialog: false
      }
  }
};
</script>

<style>
</style>