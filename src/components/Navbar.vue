  <template>
  <v-toolbar fixed app flat>
    <v-toolbar-title @click="goToHomepage()">Bookly</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>favorite</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>shopping_cart</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>
  
  <script>
export default {
  data() {
    return {};
  },
  methods: {
    goToHomepage() {
      this.$router.push("home");
    }
  }
};
</script>


