<template>
  <div>
    <v-row>
      <Navbar></Navbar>
    </v-row>
    <v-row>
      <v-col cols="12" md="12">
        <Landing />
      </v-col>
    </v-row>
    
    
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Landing from '../components/Landing.vue'
export default {
  name: "Home",
  components: {Navbar, Landing},

};
</script>
