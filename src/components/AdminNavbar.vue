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
      <v-btn text color="grey">
        <span>Log Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
      
    </v-app-bar>


    <v-navigation-drawer v-model="drawer" app class="black">
        <v-container>
        <v-col align="center" class="mt-5">
            <v-avatar color="grey">
                <v-icon dark>mdi-account</v-icon>
            </v-avatar>
          <v-subheader class="white--text justify-center">Admin</v-subheader>
        </v-col>
      </v-container>
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
    name: "adminNav",
    data() {
    return {
      drawer: false,
      items: [
        { text: "Overview", route: "/admin/overview"},
        { text: "Products", route: "/admin/product" },
        { text: "Orders", route: "/admin/order" },
      ],
    };
  },
}
</script>