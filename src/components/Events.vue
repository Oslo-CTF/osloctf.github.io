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
        date: getDateParts(new Date('2022-01-26')),
        title: 'Workshop: Machine setup - Caml at UIO and online - 17.00-20.00',
        description: 'Having a proper environment on your machine is essential to do efficient programming and solving CTF challenges. We host this workshop to provide you with advices on software to use, as well as helping you on your way to install them. In our previous workshops we\'ve helped a lot of you to setup Windows Subsystem for Linux (WSL) or install virtual machines to run a Linux distro. Don\'t know what WSL or Linux is? Don\'t worry! We will introduce our workshop with the required information. Target audience: Everyone who would like a few advices of software to check out, or want some help with setting up software for your environment. Or just hang out with us <3'
      },
      {
        id: 1,
        date: getDateParts(new Date('2022-02-02')),
        title: 'Workshop: Intro-level picoMini CTF - Caml at UIO and online - 17.00-20.00',
        description: 'From picoctf.org: "Recommended for players interested in experiencing a picoCTF competition who may feel intimidated by the content’s difficulty and competitiveness of our annual contest. This CTF consists of introductory level challenges requiring no previous experience to play. Some programming knowledge is helpful as challenges progress. Designed for individual play." The picoMini CTF for noobies runs from Jan 10 - Feb 4! Oslo CTF host an event to meet up and hack together at the very end of the CTF. This event is for everyone who wants to practice CTF skills or learn some new skills. No previous experience is required, only a will to do some thorough googling! There is something for everyone due to the categories and levels. If it is a little too hard, we know other challenges to recommend. When logged in to play.picoctf.org, you may find the CTF here: https://play.picoctf.org/events/69'
      },
      {
        id: 2,
        date: getDateParts(new Date('2022-02-23')),
        title: 'Workshop: Where Technical and Tactical Analysis meets the Business Needs - Caml at UIO and online - 17.00-20.00',
        description: 'First we will go through what cyber threat intelligence is in context of the intelligence process. Then we will convert a small portion of that knowledge into practice and work together to identify potential stakeholders and their needs, prioritize and track their requirements, and translate those requirements into collection efforts and analysis.'
      },
      {
        id: 3,
        date: getDateParts(new Date('2022-03-09')),
        title: 'Workshop: Web hacking 101 - Caml at UIO and online - 17.00-20.00',
        description: 'Target audience: Everyone interested in learning how what web hacking is and how to get started.'
      },
      {
        id: 4,
        date: getDateParts(new Date('2022-03-23')),
        title: 'Workshop: Introduction to Hack The Box (HTB) - Caml at UIO and online - 17.00-20.00',
        description: 'Beskrivelse kommer. Target audience: Everyone interested in checking out Hack The Box. This is especially nice for those who would like to understand more of pentesting.'
      },
      {
        id: 5,
        date: getDateParts(new Date('2022-04-06')),
        title: 'Presentation: Intro til reverse engineering - Caml at UIO and online - 17.00-20.00',
        description: 'En praktisk workshop i reverse engineering med hovedvekt på Windows og x86-64. Workshopen blir todelt hvor den første delen blir en introduksjon i hva reverse engineering er og hvordan man kommer i gang med det. Den andre og største delen blir praktisk hvor man selv får prøve å reverse en del forskjellig i en CTF-lignende stil.'
      },
      {
        id: 6,
        date: getDateParts(new Date('2022-04-27')),
        title: 'Workshop: Hack together! - Caml at UIO and online - 17.00-20.00',
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
