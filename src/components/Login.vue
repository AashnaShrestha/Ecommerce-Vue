<template>
  <v-dialog v-model="show" max-width="500px">
    <v-card>
      <v-toolbar color="primary" dark>Opening from the top</v-toolbar>
      <v-divider></v-divider>
      <v-card-text>
        <div class="text-h2 pa-12">Hello world!</div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" flat @click.stop="show = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>