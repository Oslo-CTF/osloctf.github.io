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
				time: '17.00 - 20.00',
				place: 'Høyskolen Kristiania, room P3-03 (Prinsens gate 7-9)',
				language: 'english/norwegian',
				stream: false,
				author: 'John and Daniel are cybersecurity students from Høyskolen Kristiania and are board members of Oslo CTF.',
				link: 'https://discord.com/events/307124449319059457/1195741079438368838',
				title: 'Intro to Web Hacking',
				description: 'Web Hacking 101 is an introductory course focusing on understanding and exploiting common web vulnerabilities, such as SQL injection and XSS, through hands-on activities in preparation for Capture The Flag (CTF) competitions.',
				prereqs: 'Bring your Laptops!',
				targetAudience: 'Anyone curious about web hacking, and anyone who likes solving CTFs.'
			},
			{
				id: 1,
				workshop: false,
				date: getDateParts(new Date('2024-02-07')),
				time: '17.00 - 19.00',
				place: 'IFI UiO, room Caml (Gaustadalléen 23B)',
				language: 'english/norwegian',
				stream: false,
				author: 'Thomas Gøytil, Head of Security in Klaveness Digital. Active bug bounty hunter and CTF player for the team bootplug.',
				link: 'https://discord.gg/GskSJvwU?event=1195741534377742456',
				title: 'Deeper Dive Into Web Application Hacking',
				description: 'In this workshop Thomas will start with a general introduction to web, HTTP and intercepting proxies. After this we will move on to some more intermediate web challenges and tools, and show some examples from actual CTFs. Please bring your laptop with Burp suite community edition installed if you would like to participate.',
				prereqs: 'No prior knowledge is required, but a basic understanding of HTTP is an advantage.',
				targetAudience: 'Everyone involved in security'
			},
			{
				id: 2,
				workshop: false,
				date: getDateParts(new Date('2024-02-28')),
				time: '17.00 - 20.00',
				place: 'Høyskolen Kristiania, room P3-03 (Prinsens gate 7-9)',
				language: 'english/norwegian',
				stream: false,
				link: 'https://discord.gg/djprwemk?event=1195741965149556777',
				title: 'Learn Cryptography with Cryptohack!',
				author: 'Mille, Association President of Oslo CTF.',
				description: 'Basic introduction to cryptography. In this workshop we will introduce the learning platform CryptoHack, a fun and interactive way of learning cryptography through solving CTF challenges! Encryption is used everywhere to secure information. Through solving challenges on CryptoHack you will learn both how to break insecure encryption as well as how to build rigid cryptographic schemes.',
				prereqs: 'Bring your laptops!',
				targetAudience: 'Students and Beginners'
			},
			{
				id: 3,
				workshop: true,
				date: getDateParts(new Date('2024-04-25')),
				time: '18.00 - 21.00',
				place: 'Høyskolen Kristiania, room TAU-201 (Tollbugata 34)',
				language: 'english/norwegian',
				stream: false,
				author: 'CybSec is a Stduent Association from Høyskolen Kristiania. They help students learn more about Cybersecurity and connect with companies in the industry.',
				link: 'https://discord.gg/RvY5QxgF?event=1229446943642488963',
				title: 'CybSec x Oslo CTF!',
				description: 'Come join us for the Mini CTF event, co-hosted by Oslo CTF and CybSec in collaboration with Høyskolen Kristiania. This event is designed to ignite a passion for cybersecurity, accommodating both beginners and those with some prior knowledge. Crafted by the talented students of Høyskolen Kristiania and the University of Oslo, this CTF features beginner-friendly challenges that are perfect for demonstrating the cybersecurity skills acquired in previous courses. It is a great opportunity for students to engage in an exciting showcase of their cybersecurity talents and learning. Whether you are just starting out or looking to further your knowledge, this event promises to be a stimulating experience in the world of cybersecurity. Join us and step into the role of a cybersecurity expert for a day!',
				prereqs: 'Bring your laptops! Online challenges (aHR0cHM6Ly9jdGYub3Nsb2N0Zi5uby8=) starts at 15.00, while on-site challenges starts at 18.00',
				targetAudience: 'Everyone who wants to try on-premise mini CTF made by students.'
			},
			{
				id: 4,
				workshop: true,
				date: getDateParts(new Date('2024-05-09')),
				time: '17.00 - 20.00',
				place: 'Høyskolen Kristiania, room P3-03 (Prinsens gate 7-9)',
				language: 'english/norwegian',
				stream: false,
				link: 'https://discord.gg/RvY5QxgF?event=1195741807380795494',
				author: 'Marit og Christian, pwn powercouple. They started Oslo CTF together years ago, and are now working with cybersecurity abroad.',
				title: 'Pwn 101 - Part 1',
				description: 'In this workshop you will learn about the stack overflow vulnerability. First you learn how the stack works and then we solve tasks together to gain control over how to abuse stack overflow vulnerabilities. You also learn to use one of the most useful tools in pwn, the pwntools scripting tool.',
				prereqs: 'netcat, Python, pwntools',
				targetAudience: 'Students and Beginners'
			},
			{
				id: 5,
				workshop: true,
				date: getDateParts(new Date('2024-05-13')),
				time: '17.00 - 20.00',
				place: 'Høyskolen Kristiania, room P3-03 (Prinsens gate 7-9)',
				language: 'english/norwegian',
				stream: false,
				link: 'https://discord.gg/RvY5QxgF?event=1195741554493632563',
				author: 'Marit og Christian, pwn powercouple. They started Oslo CTF together years ago, and are now working with cybersecurity abroad.',
				title: 'Pwn 101 - Part 2',
				description: 'Now that you have learned how the stack works and how to script solutions with pwntools, lets move on and learn about Return Oriented Programming (ROP). Now that the tasks are getting a bit more complicated, it is a good idea to learn how to use the debugger and decompiler. Therefore, we show how they use them to solve pwn tasks.',
				prereqs: 'Same as for the previous workshop, as well as a Linux environment (host machine or VM), a debugger (pwndbg/gef) and a decompiler (Binary Ninja-the one we will use while demoing, Ghidra or IDA/IDA Free.)',
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
