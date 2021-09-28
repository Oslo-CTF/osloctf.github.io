<template>
  <div id="schedule" class="eventList">
    <h4>Schedule</h4>
    <div class="eventItem" :key="event.id" v-for="event in events">
      <div class="eventDate">
        <span class="eventDay">{{ event.date.day }}</span>
        <span class="eventMonth">{{ event.date.month }}</span>
      </div>
      <div class="eventContent">
        <h5>{{ event.title }}</h5>
        <p>{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function dateSuffix(date) {
    let suffix = 'th';
    date = String(date);

    if (date === '1') { suffix = 'st'; }
    else if (date === '2') { suffix = 'nd'; }
    else if (date === '3') { suffix = 'rd' }

    return `${date}${suffix}`
}

const getDateParts = (date) => {
  return {
    day: dateSuffix(date.getDate()),
    month: monthNames[date.getMonth()]
  }
}

export default {
  name: 'Events',
  data() {
    return {
      events: [],
    };
  },
  created() {
    this.events = [
      {
        id: 0,
        date: getDateParts(new Date('2021-08-24')),
        title: 'Workshop: Practicing Computer Skills with OverTheWire',
        description: 'OverTheWire (https://overthewire.org/wargames/) is a platform that hosts wargames to learn and practice security and computer concepts in the form of games. The platform has several categories with different difficulties. \n\nThis event is for everyone. Something for everyone due to the categories and levels. This is especially good for first-year students to learn about common computer concepts and get comfortable with the Linux environment (which is really important when doing programming and tons of other computer stuff). You literally don\'t need to know _anything_ about CTF or security to join in!'
      },
      {
        id: 1,
        date: getDateParts(new Date('2021-09-07')),
        title: 'Workshop: Introduction to CTF with PicoCTF',
        description: 'picoCTF (https://play.picoctf.org/login) is a platform to solve CTF challenges for education created by security and privacy experts at Carnegie Mellom University. Similar to OverTheWire it is no competetion, but a platform to learn and practice your skills. Read more about picoCTF here: https://picoctf.org/. picoCTF hosts challenges within the most common categories of CTFs, web exploitation, reverse engineering, binary exploitation, forensics and cryptography. In addition, they have a category for general skills. Target audience: Everyone. Something for everyone due to the categories and levels.We recommend first-year students to join! You literally don\'t need to know _anything_ about CTF or security to join in!'
      },
      {
        id: 2,
        date: getDateParts(new Date('2021-09-21')),
        title: 'Workshop #3: Getting Started with Power Analysis Attacks',
        description: 'Kathrine hosts a workshop where she talks about power analysis attacks, and how to get started with it. Next, you\'ll learn how you can capture power traces and get some hands-on experience with how you can use them to break cryptography. The target audience should have some Python experience. It is good to have heard about AES and power analysis, but not a must.'
      },
      {
        id: 3,
        date: getDateParts(new Date('2021-10-05')),
        title: 'Presentation: From a history degree to cybersecurity - stories from the trenches – Smalltalk at UiO – 18.00-19.00',
        description: 'I have worked in the cybersecurity field for the last ten years, both at private companies and in the public sector, at dedicated security firms and consultancy firms. I was a part of BSides Oslo and the OsloSec meetup; lately, I have been building the Norsec community (and the initiatives growing from that). So let\'s talk about the cybersecurity field, about the pitfalls, about applying for a job, keeping yourself relevant, the mistakes I have made, and all the other experiences I have acquired for the last ten years. I believe there is room for everybody in this field, no matter your interest or background, and I should know; I have a bachelor\'s in history.'
      },
      {
        id: 4,
        date: getDateParts(new Date('2021-10-26')),
        title: 'Presentation: Demonstrating Binary Exploitation with a Recent Vulnerability',
        description: 'Binary exploitation is a common attack method in memory unsafe programs. Some might think binary exploitation is old news and rarely happens, but that’s wrong - it is highly relevant and common even in 2021! Marit and Christian introduce the concept of binary exploitation with code examples. They demonstrate how to exploit a recent vulnerability in the Exim mail server by explaining the vulnerability and the exploit, and running it live! Then they show ways to detect and prevent memory corruption vulnerabilities in your software.'
      },
      {
        id: 5,
        date: getDateParts(new Date('2021-11-09')),
        title: 'Workshop: Introduction to Identity and Access Management',
        description: 'We will start with a 60-90min presentation on what Identity and Access Management is and why it now is seen as the new perimeter and a very important cyber security domain. We will then go over to hands on tasks where we together set up a OIDC federation (to get Single Sign On) and then each participant will provison users through API\'s.'
      },
      {
        id: 6,
        date: getDateParts(new Date('2021-11-23')),
        title: 'Workshop: Hack together!',
        description: 'This is a workshop where everyone bring their computers and we hack together on whatever you want! Maybe some mandatory assignment, continuing on some of the challenges from the previous workshops, or maybe you have your own side project? Everything is welcome! <3'
      },
    ]
  },
  methods: {
    getMonthName(month) {
      return monthNames[month];
    }
  }
};
</script>

<style scoped src="../styles/events.css"></style>
