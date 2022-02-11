<template>
    <v-card>
        <v-toolbar>
            <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <div>
            {{product.title}}
        </div>
    </v-card>
</template>

<script>
export default {
    props: ['product']
}
</script>