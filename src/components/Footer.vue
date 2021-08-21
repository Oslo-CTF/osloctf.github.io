<template>
  <footer class="footer">
    <div class="footerContainer">
      © {{ year }} Oslo CTF
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  }
}
</script>

<style scoped src="../styles/footer.css"></style>