<template>
  <div id="timelines" class="content brown lighten-5">
    <v-layout row wrap>
      <v-flex xs6>
        <v-container
          class="content red lighten-4 text-center"
          style="height: 100vh;"
        >
          <v-img
            :src="require('@/assets/images/bild_me.jpg')"
            gradient="to top right,  rgba(75, 14, 62, 0.09), rgba(137, 84, 67, 0.18)"
            :cover="true"
            height="100%"
          ></v-img>
        </v-container>
      </v-flex>
      <v-flex xs6>
        <v-container class="content red lighten-5" fill-height fluid>
          <v-row align="center" justify="center">
            <v-col></v-col>
            <v-col cols="8">
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
   name: "Timelines"
};
</script>

<style></style>
