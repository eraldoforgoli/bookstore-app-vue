<template>
  <v-navigation-drawer enable-resize-watcher permanent app fixed disable-route-watcher width="200">
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/3.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Eraldo Forgoli</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile v-for="item in items" :key="item.title" @click="redirect(item.title)">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "navdrawer",
  components: {},
  data() {
    return {
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      mini: true,
      right: null,
      clipped: false,
      drawer: true,
      sideNav: false,
      miniVariant: false,
      right: true,
      rightDrawer: false
    };
  },
  methods: {
    redirect(title) {
      this.$router.push("/" + title.toLowerCase());
    }
  }
};
</script>

