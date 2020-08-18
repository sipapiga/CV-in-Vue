<template>
  <div id="home">
    <AboutMe />
    <CV />
  </div>
</template>

<script>
import CV from "@/components/CV.vue";
import AboutMe from "@/components/AboutMe.vue";
export default {
  name: "Home",
  components: {
    CV,
    AboutMe
  }
};
</script>
