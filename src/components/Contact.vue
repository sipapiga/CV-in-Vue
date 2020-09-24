<template>
  <div id="contact" class="pb-5">
    <div class="text-center">
      <v-layout row wrap>
        <v-flex  d-flex xs12 sm12 md6 lg6>
          <v-container class="red lighten-5" fill-height fluid>
            <v-row class="text-center">
              <v-col cols="12">
                <p class="blue-grey--text lighten-1 text-center heading ">
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
                  <v-btn class="mr-4" @click="submit">Send</v-btn>
                  <v-row class="mt-5">
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      color="indigo"
                      href="https://www.linkedin.com/in/sipapat-prasopsap-054442b3/"
                      target="_blank"
                    >
                      <v-icon light>mdi-linkedin</v-icon>
                    </v-btn>
                      <v-btn
                      class="mx-2"
                      fab
                      dark
                      color="light-blue darken-3"
                      href="https://www.facebook.com/sipapiga?ref=bookmarks"
                      target="_blank"
                    >
                      <v-icon light>mdi-facebook</v-icon>
                    </v-btn>
                      <v-btn
                      class="mx-2"
                      fab
                      dark
                      color="grey darken-4"
                      href="https://github.com/sipapiga"
                      target="_blank"
                    >
                      <v-icon light>mdi-github</v-icon>
                    </v-btn>
                      <v-snackbar v-model="snackbar">
                        {{ text }}
                        <template v-slot:action="{ attrs }">
                          <v-btn
                            color="pink"
                            text
                            v-bind="attrs"
                            @click="snackbar = false"
                          >
                          Close
                          </v-btn>
                        </template>
                      </v-snackbar>
                  </v-row>
                </v-container>
              </v-form>
            </v-row>
          </v-container>
        </v-flex>
        <v-flex  d-flex xs12 sm12 md6 lg6>
          <v-container
            class="content red lighten-4 text-center"
            style="height: 100%;"
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
import db from "@/firebase/init";
export default {
  name: "Contact",
  data() {
    return {
      snackbar:false,
      text:'Thank you for your message! :)',
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
      console.log(this.firstname);
      console.log(this.email);
      console.log(this.message);
      db.collection('contact').add({
        firstname: this.firstname,
        email: this.email,
        message: this.message
      }).then(()=>{
        this.snackbar = true
      })
      this.clear();
    },
    clear() {
      this.name = "";
      this.email = "";
      this.message = "";
    }
  }
};
</script>

<style scoped></style>
