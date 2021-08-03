<template>
  <div>
    <Header />
    <main>
      <div class="container">
        <Events/>
        <!-- <Team/> -->
      </div>
    </main>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Header from "./components/Header";
import Events from "./components/Events";

export default {
  name: "App",
  components: {
    Header,
    Events,
  },
};
</script>

<style src="./styles/main.css"></style>
