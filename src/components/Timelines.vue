<template>
  <div id="timelines" class="brown lighten-5">
    <v-layout row wrap>
      <v-flex  d-flex xs12 sm12 md6 lg6>
        <v-container class="red lighten-4 text-center" style="height: 100%;">
          <v-img
            :src="require('@/assets/images/IMG_0596.jpg')"
            gradient="to top right,  rgba(75, 14, 62, 0.09), rgba(137, 84, 67, 0.18)"
            :cover="true"
            height="100%"
          ></v-img>
        </v-container>
      </v-flex>
      <v-flex  d-flex xs12 sm12 md6 lg6>
        <v-container class="red lighten-5" fill-height fluid>
          <v-row align="center" justify="center">
            <v-col></v-col>
            <v-col cols="10">
              <h1 class="heading blue-grey--text lighten-1 text-center mt-5">Timelines</h1>
              <v-divider></v-divider>
              <v-timeline>
                <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
                  <template v-slot:opposite>
                    <span
                      :class="`headline font-weight-bold ${year.color}--text`"
                      v-text="year.year"
                    ></span>
                  </template>
                  <div class="py-4">
                    <h2
                      :class="
                        `headline font-weight-light mb-4 ${year.color}--text`
                      "
                    >{{ year.header }}</h2>
                    <div>
                    <p>{{ year.text }}</p></div>
                  </div>
                </v-timeline-item>
              </v-timeline>
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
  name: "Timelines",
  data() {
    return {
      years: [
        {
          color: "cyan",
          year: "Apr-May 2020",
           header: "Intenship Emmio AB",
          text:"Intenship at Emmio AB as fullastack developer. The developmen include 4 peoples in teams that we develops web system for user to manage people check-in and check-out inside the building. The technique using with nodeJs for Api, Vuejs for front-end and scrum method."
        },
        {
          color: "green",
          year: "2019",
          header: "Started Nackademin",
          text: "Started fullstack developer program at Nackademin"
        },
        {
          color: "pink",
          year: "2018",
          header: "Examination at Stockholm University",
          text:"Took Bachelor Exam in Computer and Systems Sciences, University of Stockholm"
        },
        {
          color: "amber",
          year: "2015",
           header: "Started Stockholm University ",
          text: "Started Computer and Systems Sciences Program at Stockholm University"
        },
        {
          color: "orange",
          year: "2013-Present",
          header: "WaanThai Restaurant",
          text: "Started work as waitress"
        },
        {
          color: "brown",
          year: "2011-2017",
          header: "Berns Hotel",
          text: "Started work as a breakfast waitress"
        }
      ]
    };
  }
};
</script>

<style></style>
