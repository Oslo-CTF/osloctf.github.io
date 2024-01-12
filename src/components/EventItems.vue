<template>
	<div id="schedule" class="eventList">
		<h4>Schedule</h4>
		<div class="eventItem" :key="event.id" v-for="event in events">
			<div class="eventDate">
				<span class="eventDay">{{ event.date.day }}</span>
				<span class="eventMonth">{{ event.date.month }}</span>
				<hr>
				<span class="eventTime">{{ event.time }}</span>
				<span class="eventPlace">{{ event.place }}</span>
				<div class="eventLinkContainer">
					<div v-if="event.link" class="eventLink">
						<a :href=event.link target="_blank">Event link</a>
					</div>
					<p v-else>Link coming soon</p>
				</div>
			</div>
			<div class="eventContent">
				<div class="eventHeader">
					<h5>{{ event.title }}</h5>
					<div class="eventTags">
						<p>{{ event.language }}</p>
						<p>{{ event.stream ? 'streamed online' : 'onsite only' }}</p>
						<p>{{ event.workshop ? 'workshop' : 'presentation' }}</p>
					</div>
				</div>
				<p v-html="replaceWithBr(event.description)" />
				<div class="eventInfo">
					<p><span class="pinkText">> {{ event.workshop ? 'Instructor' : 'Speaker' }}:</span> {{ event.author }}</p>
				</div>
				<p><span class="pinkText">> Prerequisites:</span> {{ event.prereqs}}</p> 
				<p><span class="pinkText">> Target audience:</span> {{ event.targetAudience }}</p> 
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
				date: getDateParts(new Date('2024-01-24')),
				time: '18.00 - 19.00',
				place: 'Høyskolen Kristiania, Tollbugata 34 (Rom TAU C1)',
				language: 'english/norwegian',
				stream: false,
				author: 'John and Daniel are cybersecurity students from Høyskolen Kristiania and are board members of Oslo CTF.',
				link: '',
				title: 'Intro to Web Hacking',
				description: 'Web Hacking 101 is an introductory course focusing on understanding and exploiting common web vulnerabilities, such as SQL injection and XSS, through hands-on activities in preparation for Capture The Flag (CTF) competitions.',
				prereqs: 'Bring your Laptops!',
				targetAudience: 'Anyone curious about web hacking, and anyone who likes solving CTFs.'
			},
			{
				id: 1,
				workshop: false,
				date: getDateParts(new Date('2024-02-07')),
				time: '18.00 - 19.00',
				place: 'IFI UiO, room Caml (Gaustadalléen 23B)',
				language: 'english/norwegian',
				stream: false,
				author: 'Thomas Gøytil, Head of Security in Klaveness Digital. Active bug bounty hunter and CTF player for the team bootplug.',
				link: '',
				title: 'Deeper into Web Application Hacking',
				description: 'Thomas will start with the basics and give you an introduction to HTTP and intercepting proxies. After introducing the basics, he will do a walk through of several real world web CTF tasks.',
				prereqs: 'No prior knowledge is required, but a basic understanding of HTTP is an advantage.',
				targetAudience: 'Everyone involved in security'
			},
			{
				id: 2,
				workshop: false,
				date: getDateParts(new Date('2024-02-28')),
				time: '17.00 - 19.00',
				place: 'IFI UiO, room Caml (Gaustadalléen 23B)',
				language: 'english/norwegian',
				stream: false,
				link: '',
				title: 'Learn Cryptography with Cryptohack!',
				author: 'Mille, Association President of Oslo CTF.',
				description: 'Basic introduction to cryptography. In this workshop we will introduce the learning platform CryptoHack, a fun and interactive way of learning cryptography through solving CTF challenges! Encryption is used everywhere to secure information. Through solving challenges on CryptoHack you will learn both how to break insecure encryption as well as how to build rigid cryptographic schemes.',
				prereqs: 'Bring your laptops!',
				targetAudience: 'Students and Beginners'
			},
			{
				id: 3,
				workshop: false,
				date: getDateParts(new Date('2024-03-20')),
				time: '17.00 - 19.00',
				place: 'Høyskolen Kristiania, Tollbugata 34 (Rom TAU C1)',
				language: 'english/norwegian',
				stream: false,
				author: 'CybSec is a Stduent Association from Høyskolen Kristiania. They help students learn more about Cybersecurity and connect with comppanies in the industry.',
				link: '',
				title: 'CybSec x Oslo CTF!',
				description: 'Join our Mini CTF, crafted by students from Høyskolen Kristiania and UiO. This event features beginner-friendly challenges, perfect for students to demonstrate their skills acquired in previous semesters. Engage in an exciting showcase of cybersecurity talents and learning.',
				prereqs: 'Bring your laptops!',
				targetAudience: 'Everyone who wants to try on-premise mini CTF made by students.'
			},
			{
				id: 4,
				workshop: false,
				date: getDateParts(new Date('2024-05-06')),
				time: '18.00 - 19.00',
				place: 'Høyskolen Kristiania, Tollbugata 34 (Rom TAU C1)',
				language: 'english/norwegian',
				stream: false,
				link: '',
				author: 'Marit og Christian, pwn powercouple. They started Oslo CTF together years ago, and are now working with cybersecurity abroad.',
				title: 'Pwn 101 - Part 1',
				description: 'Explore stack overflow vulnerabilities in our interactive workshop, Pwn 101. This session introduces the basics of stack overflows and their exploitation using Pwntools. Engage in practical challenges to learn both exploitation techniques and secure coding principles. Ideal for beginners and those with some experience, this workshop is a step into the world of cybersecurity.',
				prereqs: 'Bring your laptops!',
				targetAudience: 'Students and Beginners'
			},
			{
				id: 5,
				workshop: false,
				date: getDateParts(new Date('2024-05-15')),
				time: '17.00 - 20.00',
				place: 'IFI UiO, room Caml (Gaustadalléen 23B)',
				language: 'english/norwegian',
				stream: false,
				link: '',
				author: 'Marit og Christian, pwn powercouple. They started Oslo CTF together years ago, and are now working with cybersecurity abroad.',
				title: 'Pwn 101 - Part 2',
				description: 'Delve into Return-Oriented Programming (ROP) in this focused session. Learn how to use debuggers and decompilers effectively for understanding and exploiting ROP techniques. This workshop offers practical insights into manipulating program control flow, a key skill in advanced cybersecurity. Suitable for learners eager to expand their knowledge in code exploitation and defense strategies.',
				prereqs: 'Bring your laptops!',
				targetAudience: 'Beginners and those who joined the first workshop.'
			},
	]
},
methods: {
	getMonthName(month) {
		return monthNames[month];
	},

	replaceWithBr(text) {
		return text.replace(/\n/g, "<br /><br />")
	}
}
};
</script>

<style scoped src="../styles/events.css"></style>
