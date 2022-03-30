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
        title: 'Workshop: CTI -> Intelligence Requirements -> Where Technical and Tactical Analysis meets the Business Needs - Caml at UIO and online - 18.00-20.00',
        description: 'Freddy Murre, a senior threat intelligence analyst at Nordic Financial CERT (NFCERT), is hosting a workshop about threat intelligence! NFCERT is the sector CERT for the finance sector in Norway and we are stoked to get them in our program this semester! Firstly, we will go through what cyber threat intelligence is in context of the intelligence process. Then we will convert a small portion of that knowledge into practice and work together to identify potential stakeholders and their needs, prioritize and track their requirements, and translate those requirements into collection efforts and analysis.'
      },
      {
        id: 3,
        date: getDateParts(new Date('2022-03-09')),
        title: 'Workshop: Introduksjon til Web Hacking - Caml at UiO (not online) - 17.00-20.00',
        description: 'I denne workshoppen er vi heldige å ha Erik Vetle Larsen, seniorkonsulent og fagleder for penetrasjonstesting hos Aztek, på besøk! Der jobber han med etisk hacking og hendelseshåndtering. Han har jobbet med penetrasjonstesting i flere år, og har god erfaring med de fleste disiplinene innunder fagfeltet. Dette blir et foredrag som introduserer publikum til web hacking, etterfulgt av en Capture The Flag (CTF) konkurranse med flere oppgaver hvor man skal få prøve seg på noen av de temaene som ble presentert, samt flere andre utfordringer. Web hacking er et bredt tema med ekstremt mye å ta for seg, så foredraget vil fokusere på grunleggende prinsipper og ta sikte på å gi publikum noen av verktøyene de trenger for å kunne fordype seg selv videre, slik at man får brukt så mye som mulig av tiden på å prøve seg på praktiske oppgaver.'
      },
      {
        id: 4,
        date: getDateParts(new Date('2022-03-23')),
        title: 'Workshop: Introduction to Hack The Box (HTB) - Caml at UIO and online - 17.00-20.00',
        description: 'For our Hack The Box (HTB) workshop, we are having a visit from klarz, both a workforce member and also a member of the CTF team, bootplug, which is ranked highest of all CTF teams in Norway. HTB is an online cyber security training platform for both beginners and professionals. This workshop will introduce you to HTB Starting Point, a way to learn the basics of Penetration Testing. Starting Point contains very easy and beginner friendly vulnerable machines that you can try to hack. A walkthrough is provided with every machine, in case you get stuck with any of the machines.. Target audience: Everyone interested in checking out Hack The Box. This is especially nice for those who would like to understand more of pentesting. Also, we know for a fact that klarz is very nice person and tutor, so you probably do not want to miss out on this workshop!'
      },
      {
        id: 5,
        date: getDateParts(new Date('2022-04-06')),
        title: 'Presentation: Intro til reverse engineering - Caml at UIO and online - 17.00-20.00',
        description: 'Lurer du på hva reverse engineering egentlig er?

Da er du hjertelig velkommen til workshop med Oslo CTF! Vi arrangerer en workshop hvor vi sammen utforsker hva reverse engineering er og hvorfor det kanskje er noe for akkurat deg! Videre så får du mulighet til å prøve deg på praktisk reverse engineering av programmer for Windows. Kanskje lærer du noe av hva x86-64 assembler er og noe av magien bak hva programmer faktisk er og gjør?

Workshopen er for alle som er interessert eller nysgjerrig på reverse engineering. Den er hovedsaklig for nybegynnere innen reverse engineering. Du bør ha programmert i et språk som C, Java, Python eller lignende fra før, men alle er selvsagt velkommen uansett!

Last gjerne ned IDA Freeware fra https://hex-rays.com/ida-free/ på forhånd, så slipper du å bruke tid til det på workshopen.

Det blir også mat som ankommer litt før selve workshopen begynner.

Workshopen blir ikke streamet, men det er mulig å prøve seg på litt praktisk reversing  digitalt også.

Sted:
Rom Caml, på Instituttet for Informatikk (Gaustadalléen 23B), UiO. Sjekk ut ifirom.no og søk på Caml for å få et kart.'
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
