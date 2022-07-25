<template>
  <div id="schedule" class="eventList">
    <h4>Schedule</h4>
    <div class="eventItem" :key="event.id" v-for="event in events">
      <div class="eventDate">
        <span class="eventDay">{{ event.date.day }}</span>
        <span class="eventMonth">{{ event.date.month }}</span>
      </div>
			<div class="eventContent">
				<div class="eventHeader">
					<div class="eventInfo">
						<h5>{{ event.title }}</h5>
						<h7>{{ event.time }}</h7><br>
						<h7>{{ event.workshop ? 'Instructor' : 'Speaker' }}: {{ event.author }}</h7><br>
						<a v-if="event.link" :href=event.link target="_blank">Event link</a>
						<h7 v-else>Link coming soon</h7>
					</div>
					<div class="eventTags">
						<p>{{ event.language }}</p>
						<p>{{ event.stream ? 'streamed online' : 'onsite only' }}</p>
						<p>{{ event.workshop ? 'workshop' : 'presentation' }}</p>
					</div>
				</div>
				<p>{{ event.description }}</p>
				<p><b>Target audience:</b> {{ event.targetAudience }}</p> 
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
  name: 'EventItems',
  data() {
    return {
      events: [],
    };
  },
  created() {
    this.events = [
      {
        id: 0,
				workshop: true,
        date: getDateParts(new Date('2022-08-22')),
				time: '17.00-20.00, UiO IFI (room TBA) ',
				language: 'english',
				stream: true,
				author: 'Oslo CTF',
				link: 'https://discord.gg/eSDyb8XG?event=1000329611533615215',
        title: 'Machine Setup Workshop',
        description: 'Having a proper environment on your machine is essential to do efficient programming and solving CTF challenges. We host this workshop to provide you with advices on software to use, as well as helping you on your way to install them. In our previous workshops we\'ve helped a lot of you to setup Windows Subsystem for Linux (WSL) or install virtual machines to run a Linux distro. Don\'t know what WSL or Linux is? Don\'t worry! We will introduce our workshop with the required information.',
				targetAudience: 'Everyone who would like a few advices of software to check out, or want some help with setting up software for your environment. Or just hang out with us <3'
      },
      {
        id: 1,
				workshop: true,
        date: getDateParts(new Date('2022-09-05')),
				time: '17.00-20.00, UiO IFI (room TBA) ',
				language: 'english',
				stream: true,
				author: 'Oslo CTF',
				link: 'https://discord.gg/eSDyb8XG?event=1000335880722071592',
        title: 'Wargames with OverTheWire',
        description: 'OverTheWire (https://overthewire.org/wargames/) is a platform that hosts wargames to learn and practice common computer and security concepts in the form of games. The platform has several categories with different difficulties.',
				targetAudience: 'Something for everyone. This is especially good for first-year students. You don\'t need to know anything about CTF or security to join in. However, it is fun for experienced people also!'
      },
      {
        id: 2,
				workshop: false,
        date: getDateParts(new Date('2022-09-19')),
				time: '18.00-19.00, UiO IFI (room TBA) ',
				language: 'english',
				stream: true,
				author: 'Nora Tomas - Senior Platform Engineer and Security Lead (Vipps)',
				link: 'https://discord.gg/eSDyb8XG?event=1000336350416998430',
        title: 'Good-to-know Concepts for Secure Code',
        description: 'This lecture is about how we do secure development at Vipps. Attendees will learn about how Vipps is organised in terms of Security Leads, CSIRT, and product/platform teams. Attendees will hopefully get ideas about roles they could work with after their studies. In addition the lecture will go into technical good-to-know concepts for secure development. We will talk about how to store secrets, frontend/backend distinction and basic API authentication/authorization and security. Attendees will be given a tool box and a starting point if they want to become a Security Lead/Champion one day, or get into secure development.',
				targetAudience: 'For everyone in all experience levels.'
      },
      {
        id: 3,
				workshop: true,
        date: getDateParts(new Date('2022-10-03')),
				time: '17.00-20.00, UiO IFI (room TBA) ',
				language: 'english',
				stream: true,
				link: 'https://discord.gg/eSDyb8XG?event=1000336550023925840',
        title: 'Learn CTF with PicoCTF',
				author: 'Oslo CTF',
        description: 'picoCTF (https://play.picoctf.org/login) is a platform to solve CTF challenges for education created by security and privacy experts at Carnegie Mellom University. Similar to OverTheWire it is no competetion, but a platform to learn and practice your skills. picoCTF hosts challenges within the most common categories of CTFs, web exploitation, reverse engineering, binary exploitation, forensics and cryptography. In addition, they have a category for general skills. Read more about picoCTF here: https://picoctf.org/.',
				targetAudience: 'Everyone. Something for everyone due to having different categories and several skill levels.'
      },
      {
        id: 4,
				workshop: false,
        date: getDateParts(new Date('2022-10-17')),
				time: '18.00-19.00, UiO IFI (room TBA) - Not online',
				language: 'english',
				stream: false,
				link: 'https://discord.gg/Phy5SVM3?event=1000337040908501032',
				author: 'Jostein Løvbråten - Lead Incident Response and Technical Analysis (Advania / ACDC)',
        title: 'Recruitment call for Blue Team',
        description: 'Red team and Blue team is common terminology for offensive and defensive security. This presentation will give a rough introduction into the different disciplines within defensive security, showing that blue teaming is at least as awesome as red teaming',
				targetAudience: 'Anyone courious about a carrier within Information/Cyber Security'
      },
      {
        id: 5,
				workshop: true,
        date: getDateParts(new Date('2022-10-31')),
				time: '17.00-20.00, UiO IFI (room TBA)',
				language: 'norwegian',
				stream: true,
				link: 'https://discord.gg/eSDyb8XG?event=1000337687930228756',
				author: 'Stian Kvålshagen - Cybersikkerhetsstudent, veileder i etisk hacking og har høy rangering i TryHackMe Norge',
        title: 'Lær deg hacking med TryHackMe',
        description: 'Tryhackme(THM) er en CTF-nettside for begynnere og mer avanserte flaggjegere. Nettsiden tilbyr flere gratis rom der du lærer å tenke som en hacker, og bruke avanserte verktøy ved å teste dem på maskiner satt opp av THM. Vi skal utforske plattformen sammen før vi kobler oss til THM igjennom OpenVPN. Vi fullfører ett begynner-rom i plenum. Om vi får tid, så prøver vi oss på mer komplekse rom. Målet er å få deg koblet opp så du har muligheten til å utforske plattformen og rommene selv etter kvelden er ferdig. Dette er perfekt for nybegynnere som har lyst til å få en enkel introduksjon til CTF og hacking. ',
				targetAudience: 'Nybegynnere'
      },
      {
        id: 6,
				workshop: true,
        date: getDateParts(new Date('2022-11-28')),
				time: '17.00-20.00, UiO IFI (room TBA) ',
				language: 'english',
				stream: true,
				link: 'https://discord.gg/eSDyb8XG?event=1000337891295232100',
				author: 'Oslo CTF',
        title: 'Hack together!',
        description: 'This is a workshop where everyone bring their computers and we hack together on whatever you want! Maybe some mandatory assignment, continuing on some of the challenges from the previous workshops, or maybe you have your own side project? Everything is welcome! <3',
				targetAudience: 'Everyone <3'
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
