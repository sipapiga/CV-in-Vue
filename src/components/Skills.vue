<template>
  <div id="skills">
    <div class="text-center content">
      <v-layout row wrap>
        <v-flex  d-flex xs12 sm12 md6 lg6>
          <v-container class="content red lighten-5" fill-height fluid>
            <v-row class="text-center">
              <v-col cols="12">
                <p class="blue-grey--text lighten-1 text-center heading">Skills</p>
                <v-divider></v-divider>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col cols="4">
                <div class="text-center">
                  <h4>Javascript</h4>
                  <v-progress-circular
                    :rotate="-90"
                    :size="100"
                    :width="15"
                    :value="90"
                    color="teal"
                  >90%</v-progress-circular>
                </div>
                <div class="text-center">
                  <h4>HTML5</h4>
                  <v-progress-circular
                    :rotate="-90"
                    :size="100"
                    :width="15"
                    :value="90"
                    color="primary"
                  >90%</v-progress-circular>
                </div>
              </v-col>
              <v-col cols="4">
                <div class="text-center">
                  <h4>CSS</h4>
                  <v-progress-circular
                    :rotate="-90"
                    :size="100"
                    :width="15"
                    :value="80"
                    color="pink"
                  >80%</v-progress-circular>
                </div>
                <div class="text-center">
                  <h4>Java</h4>
                  <v-progress-circular
                    :rotate="-90"
                    :size="100"
                    :width="15"
                    :value="50"
                    color="blue-grey"
                  >ุ50%</v-progress-circular>
                </div>
              </v-col>
              <v-col cols="4">
                <div class="text-center">
                  <h4>PHP</h4>
                  <v-progress-circular
                    :rotate="-90"
                    :size="100"
                    :width="15"
                    :value="60"
                    color="deep-orange lighten-2"
                  >60%</v-progress-circular>
                </div>
                <div class="text-center">
                  <h4>SQL, MongoDB</h4>
                  <v-progress-circular
                    :rotate="-90"
                    :size="100"
                    :width="15"
                    :value="70"
                    color="indigo darken-2"
                  >70%</v-progress-circular>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-flex>
        <v-flex  d-flex xs12 sm12 md6 lg6>
          <v-container class="content red lighten-4 text-center" style="height: 100vh;">
            <v-img
              :src="require('@/assets/images/bild3.jpg')"
              gradient="to top right,  rgba(75, 14, 62, 0.09), rgba(137, 84, 67, 0.18)"
              :cover="true"
              height="100%"
            ></v-img>
          </v-container>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      interval: {},
      value: 0,
      newValue: null
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  created() {
    this.interval = setInterval(() => {
      if (this.value === this.value) {
        return this.value;
      }
      this.value += 10;
    }, 1000);
  }
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
