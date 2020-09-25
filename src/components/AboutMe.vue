<template>
  <div id="aboutme" class="content brown lighten-5">
    <v-layout row justify-space-between class="content">
      <v-flex d-flex xs12 sm12 md6 lg6>
        <v-container
          class="content red lighten-4 text-center"
          style="height: 100%;"
        >
          <v-img  :aspect-ratio="16/9"
            :src="require('@/assets/images/bild_me.jpg')"
            gradient="to top right,  rgba(75, 14, 62, 0.09), rgba(137, 84, 67, 0.18)"
            :cover="true"
            height="100%"
          ></v-img>
        </v-container>
      </v-flex>
      <v-flex d-flex xs12 sm12 md6 lg6>
        <v-container class="content red lighten-5" fill-height fluid>
          <v-row align="center" justify="center">
            <v-col></v-col>
            <v-col cols="8">
              <h1 class="heading ml-10 mb-10">About ME</h1>
              <p class="subheading ml-10">
                I was born in Thailand but I have lived in Sweden for 13 years.
                I have previously worked in a restaurant, but after 10 years in
                the the industry I felt that I wanted a new challenge. I have
                always interested in technology and found a suitable education
                so it felt like it was time to change careers. In addition to
                school and work, I have also had the opportunity to travel and
                meet new people.
              </p>
              <v-row justify="center" class="mt-10">
                <v-btn color="blue-grey lighten-4" class="mr-2" href="#skills">Skills</v-btn>
                <v-btn color="blue-grey lighten-4" class="ml-5" href="#contact">Contact</v-btn>
              </v-row>
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
