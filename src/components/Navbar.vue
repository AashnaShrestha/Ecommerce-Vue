<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-col cols="4">
        <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Jhigu</span>
        <span>Pasa</span>
      </v-toolbar-title>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="6" md="4">
        <v-text-field label="Search" dense outlined class="mt-5" max-width="50%"></v-text-field>
      </v-col>
      
    </v-app-bar>


    <v-navigation-drawer v-model="drawer" app class="black">
      <v-list>
        <v-list-item v-for="item in items" :key="item.text" router :to="item.route" item>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { text: "Home", route: "/" },
        { text: "Products", route: "/product" },
        { text: "About", route: "/about" },
      ],
    };
  },
};
</script>