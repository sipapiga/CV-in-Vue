<template>
  <div id="home">
    <AboutMe />
    <Skills />
    <Portfolio />
    <Timelines />
    <Contact />
  </div>
</template>

<script>
import AboutMe from "@/components/AboutMe.vue";
import Skills from "@/components/Skills.vue";
import Portfolio from "@/components/Portfolio.vue";
import Timelines from "@/components/Timelines.vue";
import Contact from "@/components/Contact.vue";
export default {
  name: "Home",
  components: {
    AboutMe,
    Skills,
    Portfolio,
    Timelines,
    Contact
  }
};
</script>
