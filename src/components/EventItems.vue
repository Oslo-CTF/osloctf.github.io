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
				<div class="eventInfo">
					<p>{{ event.workshop ? 'Instructor' : 'Speaker' }}: <i>{{ event.author }}</i></p>
				</div>
				<p>{{ event.description }}</p>
				<p><b>Prerequisites:</b> {{ event.prereqs}}</p> 
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
				workshop: false,
				date: getDateParts(new Date('2023-01-30')),
				time: '18.00-19.00, TBA',
				language: 'english',
				stream: true,
				author: 'Marit Tokle (maritio_o), program manager for Oslo CTF, CTF player for the team bootplug, and Senior Software Engineer and Business Developer for Secure Development @ Sopra Steria',
				link: 'https://discord.gg/2zwkdRRFQp?event=1055747857648463902',
				title: 'What I learned from the CTF web challenge "Hack(pt)MD"',
				description: 'Marit will walk us through her team\'s way of solving the web challenge called Hack(pt)MD, which they didn\'t even solve. She will demonstrate a couple of things they tried that didn\'t work, and what they learned from these trials and errors. Also, if there is time she will show how to patch the application so that it is not vulnerable anymore. You will be provided with resources so that you can try to play with and solve the challenge yourselves.',
				prereqs: 'It is not necessary, but is probably nice to know a bit on JavaScript, HTML and CSS.',
				targetAudience: 'All experience levels, those who are interested in web challenges in CTFs'
			},
			{
				id: 1,
				workshop: true,
				date: getDateParts(new Date('2023-02-13')),
				time: '17.00-20.00, TBA',
				language: 'english',
				stream: true,
				author: 'Christian, Security Researcher @ Dataflow Security, ex-Googler, speaker at BlackHat 2022 and CTF player for bootplug',
				link: 'https://discord.gg/2zwkdRRFQp?event=1055753085080830002',
				title: 'Intro to pwn challenges',
				description: 'Intro to pwn challenge platforms and useful resources for learning pwn. We aim at getting you started with pwn, a category known for being one of the more difficult ones in CTF. This is nice as a warm-up for the next workshop, and we highly recommend joining this if you want to learn about Return Oriented Programming.',
				prereqs: 'Laptop with Linux (or VM with Linux)',
				targetAudience: 'Beginners, this is meant as a warmup to the next workshop. Anyone who are interested in the pwn category or binary exploitation'
			},
			{
				id: 2,
				workshop: false,
				date: getDateParts(new Date('2023-03-06')),
				time: '17.00-20.00, TBA',
				language: 'english',
				stream: true,
				author: 'Eirik Nordbø, incident responder and penetration tester in Equinor, and CTF player for the team EPT',
				link: 'https://discord.gg/2zwkdRRFQp?event=1055763054421344357',
				title: 'Introduction to return oriented programming (ROP)',
				description: 'Return Oriented Programming is the art of puzzling small parts (gadgets) of a computer program together in a way not intended by the program author. In this workshop we will swiftly discuss concepts like x64 architecture, assembly, stack layout, modern exploit mitigation and more before we move on to understanding stack buffer overflows and how we can use ROP to exploit them.',
				prereqs: 'Laptop with Linux (or VM with Linux), IDA Free (https://hex-rays.com/ida-free/), pwntools (https://github.com/Gallopsled/pwntools), pwndbg (https://github.com/pwndbg/pwndbg), ropper (https://pypi.org/project/ropper/). You will get help with installing this in the previous workshop',
				targetAudience: 'This workshop will hopefully be interesting for anyone without prior binary exploitation experience. However, some experience with assembly, x86 and reverse will make it easier to tag along.'
			},
			{
				id: 3,
				workshop: true,
				date: getDateParts(new Date('2023-03-27')),
				time: '17.00-20.00, TBA',
				language: 'english',
				stream: true,
				link: 'https://discord.gg/2zwkdRRFQp?event=1055764501011628082',
				title: 'The challenge platform CyberTalents',
				author: 'Oslo CTF',
				description: 'Oslo CTF shows you the challenge platform called CyberTalents. We solve a couple of challenges together before we go into smaller groups or work on challenges alone. The platform have many different categories with challenges. The common ones, but also secure development, mobile hacking, and more!',
				prereqs: 'None',
				targetAudience: 'Everyone, there are different categories and difficulties to choose between'
			},
			{
				id: 4,
				workshop: false,
				date: getDateParts(new Date('2023-04-17')),
				time: '18.00-19.00, TBA',
				language: 'english',
				stream: true,
				link: 'https://discord.gg/2zwkdRRFQp?event=1055766639985045544',
				author: 'Thomas Gøytil, Head of Security in Klaveness Digital. Active bug bounty hunter and CTF player for the Norwegian CTF team bootplug',
				title: 'Intro to web application hacking',
				description: 'This is a introduction talk about web application hacking. We will start with the basic and give an introduction to HTTP and intercepting proxies. After introducing the basics, we will do a walk through of several real world web CTF tasks.',
				prereqs: 'None, but there is an advantage to have basic understanding of HTTP',
				targetAudience: 'Beginners that want an introduction to or learn more about web hacking'
			},
			{
				id: 5,
				workshop: true,
				date: getDateParts(new Date('2023-05-08')),
				time: 'TBA',
				language: 'english',
				stream: true,
				link: '',
				author: '',
				title: '',
				description: '',
				prereqs: '',
				targetAudience: ''
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
