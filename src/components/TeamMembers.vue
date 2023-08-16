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
  name: 'TeamMembers',
  data() {
    return {
      members: [
        {
          id: 0,
          name: 'Millie',
          title: 'Association President',
					profilePicture: `${publicPath}team/sithis.jpg`,
        },
        {
          id: 1,
          name: 'John',
          title: 'Association Vice President',
					profilePicture: `${publicPath}team/john.jpg`,
        },
        {
          id: 2,
          name: 'Daniel',
          title: 'Event and Social Media Manager',
					profilePicture: `${publicPath}team/daniel.jpg`,
        },
        {
          id: 3,
          name: 'Are',
          title: 'Finance Manager',
					profilePicture: `${publicPath}team/Are.jpeg`,
        },
        {
          id: 4,
          name: 'Marit',
          title: 'Program Manager',
          profilePicture: `${publicPath}team/Tokle.jpg`,
        },
        /*
        {
          id: 5,
          name: 'Kathrine',
          title: 'Organizer',
          profilePicture: `${publicPath}team/default1.jpg`,
        },
        {
          id: 6,
          name: 'Marie Ihle Frogner',
          title: 'Organizer',
          profilePicture: `${publicPath}team/Frogner.jpg`,
        },
        {
          id: 7,
          name: 'Kathrine',
          title: 'Organizer',
					profilePicture: `${publicPath}team/default1.jpg`,
        },
        */
      ],
    }
  }
}
</script>

<style scoped src="../styles/team.css"></style>
