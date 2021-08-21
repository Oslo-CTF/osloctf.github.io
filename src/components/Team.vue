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
          name: 'Line',
          title: 'Association President',
          profilePicture: ``,
        },
        {
          id: 1,
          name: 'Tiril',
          title: 'Association Vice President',
          profilePicture: ``,
        },
        {
          id: 2,
          name: 'Armina',
          title: 'Social and Recruitment Manager',
          profilePicture: ``,
        },
        {
          id: 3,
          name: 'Kristine',
          title: 'Finance Manager',
          profilePicture: ``,
        },
        {
          id: 4,
          name: 'Marit Iren R. Tokle',
          title: 'Events Manager',
          profilePicture: `${publicPath}team/Tokle.jpg`,
        },
        {
          id: 5,
          name: 'Mathias Frits Rørvik',
          title: 'Organizer',
          profilePicture: `${publicPath}team/Rorvik.jpg`,
        },
        {
          id: 6,
          name: 'Marie Ihle Frogner',
          title: 'Organizer',
          profilePicture: `${publicPath}team/Frogner.jpg`,
        },
        {
          id: 7,
          name: 'Daniel Heinesen',
          title: 'Organizer',
          profilePicture: `${publicPath}team/Heinesen.jpg`,
        },
      ],
    }
  }
}
</script>

<style scoped src="../styles/team.css"></style>