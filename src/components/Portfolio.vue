<template>
  <div id="portfolio">
    <v-layout row wrap>
      <v-flex  d-flex xs12 sm12 md12 lg12>
        <v-container class="red lighten-5" fill-height fluid>
          <v-row class="text-center">
            <v-col cols="12">
              <h1 class="heading blue-grey--text lighten-1 text-center  mt-5">
                Portfolio
              </h1>
              <v-divider></v-divider>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-card class="m-3">
              <v-container class="brown lighten-4">
                <v-row>
                  <v-col cols="12" md="4" sm="12" lg="4"  v-for="card in cards" :key="card.title">
                    <v-card class="mx-auto" max-width="344">
                      <a :href="`${card.href}`" target="_blank">
                        <v-img
                          :src="require(`@/assets/images/${card.src}`)"
                          gradient="to top right,  rgba(75, 14, 62, 0.09), rgba(137, 84, 67, 0.18)"
                          :cover="true"
                          height="200px"
                        ></v-img>
                      </a>
                      <v-card-title>{{card.title}}</v-card-title>

                      <v-card-subtitle
                        >{{card.subtitle}}</v-card-subtitle
                      >

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon @click="card.show = !card.show">
                          <v-icon>{{
                            card.show ? "mdi-chevron-up" : "mdi-chevron-down"
                          }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <div v-show="card.show">
                          <v-divider></v-divider>

                          <v-card-text>
                            <p class="font-weight-bold">Technique:</p>
                            <p>{{card.technique}}</p>
                            <p>
                              {{card.text}}
                            </p>
                          </v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      show: false,
       cards: [
      { title: 'CRM', subtitle: 'School Project - Javascript', show: false,technique:'Javascript, HTML:5, CSS, SASS, jQuery, Bootstrap:',text:'', src: 'crm.jpg', href: 'https://sipapiga.github.io/CRM/' },
      {title: 'Restaurant recension', subtitle: 'School Project - Backend', show: false,technique:'NodeJs, Express, MySQL, Heroku, HTML5, Bootstrap, AJAX:',text:'', src: 'api-emmio.jpg', href: 'https://ratingsipr1901.herokuapp.com/'  },
      { title: 'Movie recension', subtitle: 'School Project - CMS with Wordpress', show: false,technique:'Wordpress, MySQL, PHP, AJAX:',text:'', src: 'moviewordpress.jpg', href: 'http://sipapiga.com/movieratingwebb19/' },
      {title: 'Realestate Management', subtitle: 'School Project - CMS with Wordpress', show: false,technique:'Wordpress, MySQL, PHP, AJAX',text:'A realestate website builded with Wordpress', src: 'realestatewordpress.jpg', href: 'https://sipapiga.com/realestatewebb19/'  },
      {title: 'Api for Presence Management', subtitle: 'Intenship Project - NodeJs', show: false,technique:'NodeJs, MongoDB, Express',text:'An api builded with NodeJs during intenship time in spring 2020', src: 'api-emmio.jpg', href: 'https://api.pm.emmio.se/'  },
      { title: 'Presence Management', subtitle: 'Intenship Project - Vuejs', show: false,technique:'Javascript, Vuesjs, MongoDB, Axios',text:'An intenship project builded with vuejs to manage user check-in and check-out inside the building', src: 'admin-pm.jpg', href: 'https://pm.emmio.se/' }
 
    ]
    };
  }
};
</script>

<style scoped></style>
