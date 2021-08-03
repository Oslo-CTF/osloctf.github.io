<template>
  <div class="header">
    <div class="headerContainer">
      <img class="logo" alt="Logo" src="../assets/logo.svg" />
      <div>
        <h1 class="title">Oslo-CTF</h1>
        <p class="description">
          Oslo-CTF is a group of security enthusiasts and programmers. Based at
          the University of Oslo and Oslo Metropolitan University, and now
          scaling beyond to the Oslo area. We host ethical hacking workshops to
          raise awareness of the importance of IT security. The workshops are
          based on tasks from hacking competitions (CTFs), and show how to
          exploit vulnerabilities. We regularly participate in CTFs, and meet up
          to solve tasks together a few times each semester. You are more than
          welcome to join us while solving hacking tasks! Join our discord
          channel to get more information about joining us in hacking
          competitions:
          <a href="https://discord.gg/7aTwpGa">https://discord.gg/7aTwpGa</a>
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
    <svg class="trim" viewBox="0 0 1920 259">
      <g transform="matrix(1,0,0,1,0,-821.452)">
        <path
          d="M0,948.736C163.974,898.948 379.499,770.145 557.751,870.149C932.766,1080.54 843.353,1061.82 1192.94,907.165C1296.43,861.381 1546.45,1036.3 1642.23,899.204C1775.75,708.075 1849.15,929.062 1920,932.307L1920,1080L0,1080L0,948.736Z"
        />
      </g>
    </svg>
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