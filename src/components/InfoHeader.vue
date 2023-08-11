<template>
  <div class="header">
    <div class="headerContainer">
      <img class="logo" alt="Logo" src="../assets/logo/standard_hvit_tekst.png" />
      <div>
        <p class="description">
          Oslo CTF is a group of security enthusiasts and programmers based in Oslo.
          Our target group is students and newcomers to the security community. 
          Everyone are welcome! 
          Our goal is to raise awareness of the importance of IT security
          and which types of security jobs are out there,
          as well as teaching people about security.
          Every semester we host workshops and presentation related to security or CTF.
        </p> 
        <p>
          Join our Discord server to get more information about our events:
          <a target="_blank" rel="noopener" href="https://discord.gg/8qxVtSfHfx">https://discord.gg/8qxVtSfHfx</a>
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
  name: "EventHeader",
  props: {

  },
  components: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../styles/header.css"></style>
<style scoped href="../styles/iconLink.css"></style>
