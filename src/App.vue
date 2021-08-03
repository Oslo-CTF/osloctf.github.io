<template>
  <div>
    <Header />
    <main>
      <div class="container">
        <Events/>
        <Team/>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Events from "./components/Events";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Events,
    Team,
    Footer,
  },
};
</script>

<style src="./styles/main.css"></style>
