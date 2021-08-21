<template>
  <div class="header">
    <div class="headerContainer">
      <img class="logo" alt="Logo" src="../assets/logo.svg" />
      <div>
        <h1 class="title">Oslo CTF</h1>
        <p class="description">
          Oslo CTF is a group of security enthusiasts and programmers based at
          the University of Oslo, Oslo Metropolitan University, and Noroff. 
          Our target group is students, but every newcomer to the security 
          community is more than welcome! 
          Our goal is to raise awareness of the importance of IT security, 
          and which types of security jobs are out there. 
          Every semester we host workshops related to programming, CTF or 
          other security topics.
        </p> 
        <p>
          Join our Discord server to get more information about our events:
          <a target="_blank" rel="noopener" href="https://discord.gg/7aTwpGa">https://discord.gg/7aTwpGa</a>
        </p>
        <div class="links">
          <div class="internalLinks">
            <a class="internalLink" href="#schedule">View Schedule</a>
            <a class="internalLink" href="#team">The Team</a>
          </div>
          <div class="externalLinks">
            <a target="_blank" rel="noopener" class="iconButton" href="https://github.com/Oslo-CTF">
              <img src="../assets/github.svg" alt="github" />
            </a>
            <a target="_blank" rel="noopener" class="iconButton" href="https://facebook.com/osloctf/">
              <img src="../assets/facebook.svg" alt="facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Header",
  props: {

  },
  components: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../styles/header.css"></style>
<style scoped href="../styles/iconLink.css"></style>