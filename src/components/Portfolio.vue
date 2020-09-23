<template>
  <div id="portfolio">
    <v-layout row wrap>
      <v-flex xs12>
        <v-container class="content red lighten-5" fill-height fluid>
          <v-row class="text-center">
            <v-col cols="12">
              <h1 class="display-3 blue-grey--text lighten-1 text-center  mt-5">
                Portfolio
              </h1>
              <v-divider :inset="inset"></v-divider>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-card class="m-3">
              <v-container class="brown lighten-4">
                <v-row>
                  <v-col cols="4">
                    <v-card class="mx-auto" max-width="344">
                      <a href="https://sipapiga.github.io/CRM/" target="_blank">
                        <v-img
                          :src="require('@/assets/images/crm.jpg')"
                          gradient="to top right,  rgba(75, 14, 62, 0.09), rgba(137, 84, 67, 0.18)"
                          :cover="true"
                          height="200px"
                        ></v-img>
                      </a>
                      <v-card-title>CRM</v-card-title>

                      <v-card-subtitle
                        >School Project - Javascript 2</v-card-subtitle
                      >

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon @click="show = !show">
                          <v-icon>{{
                            show ? "mdi-chevron-up" : "mdi-chevron-down"
                          }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <div v-show="show">
                          <v-divider></v-divider>

                          <v-card-text>
                            <p class="font-weight-bold">Technique:</p>
                            <p>
                              Javascript, HTML:5, CSS, SASS, jQuery, Bootstrap
                            </p>
                          </v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card class="mx-auto" max-width="344">
                      <a href="https://ratingsipr1901.herokuapp.com/" target="_blank">
                        <v-img
                          :src="require('@/assets/images/rating.jpg')"
                          gradient="to top right,  rgba(75, 14, 62, 0.09), rgba(137, 84, 67, 0.18)"
                          :cover="true"
                          height="200px"
                        ></v-img>
                      </a>
                      <v-card-title>Restaurant recension</v-card-title>

                      <v-card-subtitle
                        >School Project - Backend</v-card-subtitle
                      >

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon @click="show = !show">
                          <v-icon>{{
                            show ? "mdi-chevron-up" : "mdi-chevron-down"
                          }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <div v-show="show">
                          <v-divider></v-divider>

                          <v-card-text>
                            <p class="font-weight-bold">Technique:</p>
                            <p>
                              NodeJs, Express, MySQL, Heroku, HTML5, Bootstrap,
                              AJAX
                            </p>
                          </v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card class="mx-auto" max-width="344">
                      <a href="http://sipapiga.com/movieratingwebb19/" target="_blank">
                        <v-img
                          :src="require('@/assets/images/moviewordpress.jpg')"
                          gradient="to top right,  rgba(75, 14, 62, 0.09), rgba(137, 84, 67, 0.18)"
                          :cover="true"
                          height="200px"
                        ></v-img>
                      </a>
                      <v-card-title>Movie recension</v-card-title>

                      <v-card-subtitle
                        >School Project - CMS with Wordpress</v-card-subtitle
                      >

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon @click="show = !show">
                          <v-icon>{{
                            show ? "mdi-chevron-up" : "mdi-chevron-down"
                          }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <div v-show="show">
                          <v-divider></v-divider>

                          <v-card-text>
                            <p class="font-weight-bold">Technique:</p>
                            <p>Wordpress, MySQL, PHP, AJAX</p>
                          </v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card class="mx-auto" max-width="344">
                      <a href="https://sipapiga.com/realestatewebb19/" target="_blank">
                        <v-img
                          :src="
                            require('@/assets/images/realestatewordpress.jpg')
                          "
                          gradient="to top right,  rgba(75, 14, 62, 0.09), rgba(137, 84, 67, 0.18)"
                          :cover="true"
                          height="200px"
                        ></v-img>
                      </a>
                      <v-card-title>Realestate Management</v-card-title>

                      <v-card-subtitle
                        >School Project - CMS with Wordpress</v-card-subtitle
                      >

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon @click="show = !show">
                          <v-icon>{{
                            show ? "mdi-chevron-up" : "mdi-chevron-down"
                          }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <div v-show="show">
                          <v-divider></v-divider>

                          <v-card-text>
                            <p class="font-weight-bold">Technique:</p>
                            <p>Wordpress, MySQL, PHP, AJAX</p>
                            <p>A realestate website builded with Wordpress</p>
                          </v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card class="mx-auto" max-width="344">
                      <a href="https://api.pm.emmio.se/" target="_blank">
                        <v-img
                          :src="require('@/assets/images/api-emmio.jpg')"
                          gradient="to top right,  rgba(75, 14, 62, 0.09), rgba(137, 84, 67, 0.18)"
                          :cover="true"
                          height="200px"
                        ></v-img>
                      </a>
                      <v-card-title>Api</v-card-title>

                      <v-card-subtitle
                        >Intenship Project - Backend</v-card-subtitle
                      >

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon @click="show = !show">
                          <v-icon>{{
                            show ? "mdi-chevron-up" : "mdi-chevron-down"
                          }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <div v-show="show">
                          <v-divider></v-divider>

                          <v-card-text>
                            <p class="font-weight-bold">Technique:</p>
                            <p>NodeJs, MongoDB, Express</p>
                            <p>
                              An api builded with NodeJs during intenship time
                              in spring 2020
                            </p>
                          </v-card-text>
                        </div>
                      </v-expand-transition>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card class="mx-auto" max-width="344">
                      <a href="https://pm.emmio.se/" target="_blank">
                        <v-img
                          :src="require('@/assets/images/admin-pm.jpg')"
                          gradient="to top right,  rgba(75, 14, 62, 0.09), rgba(137, 84, 67, 0.18)"
                          :cover="true"
                          height="200px"
                        ></v-img>
                      </a>
                      <v-card-title>Realestate Management</v-card-title>

                      <v-card-subtitle
                        >Intenship Project - Vuejs</v-card-subtitle
                      >

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon @click="show = !show">
                          <v-icon>{{
                            show ? "mdi-chevron-up" : "mdi-chevron-down"
                          }}</v-icon>
                        </v-btn>
                      </v-card-actions>

                      <v-expand-transition>
                        <div v-show="show">
                          <v-divider></v-divider>

                          <v-card-text>
                            <p class="font-weight-bold">Technique:</p>
                            <p>Javascript, Vuesjs, MongoDB, Axios</p>
                            <p>
                              An intenship project builded with vuejs to manage
                              user check-in and check-out inside the building
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
      show: false
    };
  }
};
</script>

<style scoped></style>
