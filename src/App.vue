<template>
  <v-app>
      <v-app-bar dark class="brown lighten-1">
          <v-app-bar-nav-icon
            @click.stop="sideNav = !sideNav"
            class="hidden-sm-and-up"
          ></v-app-bar-nav-icon>
          <v-avatar>
            <v-img :src="require('@/assets/images/profileBildEdit.png')" />
          </v-avatar>
          <v-toolbar-title>Sipapat P.</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn
            class="brown lighten-1"
            v-for="item in menuItems"
            :key="item.title"
            :href="item.href"
          >
            <v-icon icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
        <v-navigation-drawer v-model="sideNav" absolute temporary >
          <v-list nav dense>
          <v-list-item-group v-model="group" v-for="item in menuItems" :key="item.title">
              <v-list-item :to="item.href">
                <v-icon>{{ item.icon }}</v-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
           </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      <v-main>
        <router-view />
      </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      group:null,
      menuItems: [
        { icon: "account_circle ", title: "About Me", href: "#aboutme" },
        { icon: "build", title: "Skills", href: "#skills" },
        { icon: "work", title: "Portfolio", href: "#portfolio" },
        { icon: "timeline", title: "Timelines", href: "#timelines" }
      ]
    };
  },
  watch:{
    group(){
      this.sideNav=false
    }
  }
};
</script>

<style lang="scss">
@import "./assets/custom-vars.scss";
</style>
