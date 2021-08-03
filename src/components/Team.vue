<template>
  <div id="team">
    <h4>The Team</h4>
    <div class="memberList">
      <div class="member" :key="member.id" v-for="member in members">
        <div class="avatarContainer">
          <div class="avatar">
            <img :src="member.profilePicture" :alt="member.name" />
          </div>
        </div>
        <div class="details">
          <span class="name">{{ member.name }}</span>
          <span class="title">{{ member.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueConfig from '../../vue.config.js';

const publicPath = process.env.NODE_ENV === 'development' ? '/' : vueConfig.publicPath;

export default {
  name: 'Team',
  data() {
    return {
      members: [
        {
          id: 0,
          name: 'Greger Martinussen',
          title: 'Team Leader',
          profilePicture: `${publicPath}team/Martinussen.jpg`,
        },
        {
          id: 1,
          name: 'Marit Iren Rognli Tokle',
          title: 'Team Captain',
          profilePicture: `${publicPath}team/Tokle.jpg`,
        },
        {
          id: 2,
          name: 'Mathias Frits Rørvik',
          title: 'Team Captain',
          profilePicture: `${publicPath}team/Rorvik.jpg`,
        },
        {
          id: 3,
          name: 'Marie Ihle Frogner',
          title: 'Team Captain',
          profilePicture: `${publicPath}team/Frogner.jpg`,
        },
        {
          id: 4,
          name: 'Daniel Heinesen',
          title: 'Team Captain',
          profilePicture: `${publicPath}team/Heinesen.jpg`,
        },
      ],
    }
  }
}
</script>

<style scoped src="../styles/team.css"></style>