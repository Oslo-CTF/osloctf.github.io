<template>
  <div>
    <InfoHeader />
    <main>
      <div class="container">
        <EventItems/>
        <TeamMembers/>
      </div>
    </main>
    <InfoFooter/>
  </div>
</template>

<script>
import InfoHeader from "./components/InfoHeader";
import EventItems from "./components/EventItems";
import TeamMembers from "./components/TeamMembers";
import InfoFooter from "./components/InfoFooter";

export default {
  name: "App",
  components: {
    InfoHeader,
    EventItems,
    TeamMembers,
    InfoFooter,
  },
};
</script>

<style src="./styles/main.css"></style>
