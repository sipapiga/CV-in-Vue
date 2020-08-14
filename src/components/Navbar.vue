<template>
  <v-toolbar dark class="teal darken-1">
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <div class="d-flex align-center">
      <v-toolbar-side-icon>
        <v-app-bar-nav-icon
          @click.native="sideNav = !sideNav"
          class="hidden-sm-and-up"
        ></v-app-bar-nav-icon>
        <v-avatar>
          <v-img :src="require('@/assets/images/profileBildEdit.png')" />
        </v-avatar>
      </v-toolbar-side-icon>
      <v-toolbar-title>Sipapat P.</v-toolbar-title>
    </div>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        class="teal darken-1"
        flat
        v-for="item in menuItems"
        :key="item.title"
      >
        <v-icon flat left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      sideNav: false,
      menuItems: [
        { icon: "mdi-home", title: "Home" },
        { icon: "mdi-contact_page", title: "CV" },
        { icon: "mdi-build", title: "Skills" },
        { icon: "mdi-work", title: "Portfolio" },
        { icon: "mdi-timeline", title: "Timelines" }
      ]
    };
  }
};
</script>

<style scoped></style>
