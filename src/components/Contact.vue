<template>
  <div id="contact" class="pb-5">
    <div class="text-center content">
      <v-layout row wrap>
        <v-flex xs6>
          <v-container class="content red lighten-5" fill-height fluid>
            <v-row class="text-center">
              <v-col cols="12">
                <p class="blue-grey--text lighten-1 text-center heading">
                  Contact Me
                </p>
                <v-divider></v-divider>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-subheader>
                Fill in the form below or send a PM on LinkedIn. You can also
                email me at sipapat.prasopsap@gmail.com. Hope to hear from you
                soon.
              </v-subheader>
              <v-form v-model="valid">
                <v-container fluid>
                  <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    :counter="10"
                    label="First name"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>

                  <v-textarea label="Message" v-model="message"></v-textarea>
                  <v-btn class="mr-4" @click="submit">submit</v-btn>
                </v-container>
              </v-form>
            </v-row>
          </v-container>
        </v-flex>
        <v-flex xs6>
          <v-container
            class="content red lighten-4 text-center"
            style="height: 100vh;"
          >
            <v-img
              :src="require('@/assets/images/bild2.jpg')"
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
  name: "Contact",
  data() {
    return {
      valid: false,
      firstname: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 20 || "Name must be less than 20 characters"
      ],
      email: "",
      message: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    submit() {
      console.log(this.firstname)
      console.log(this.email)
      console.log(this.message)
      this.clear()
    },
    clear() {
      this.name = "";
      this.email = "";
      this.message = "";
    }
  }
};
</script>

<style scoped>
img {
  width: 70%;
}
.map {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
}
</style>
