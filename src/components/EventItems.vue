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
				workshop: false,
				date: getDateParts(new Date('2023-09-04')),
				time: '18.00 - 19.00',
				place: 'Høyskolen Kristiania, room KAU-B1-02',
				language: 'english',
				stream: true,
				author: 'Marit is a board member of Oslo CTF, she plays with the CTF team bootplug and specializes in secure development as a Senior Software Engineer at Sopra Steria',
				link: 'https://discord.gg/2zwkdRRFQp?event=1137777997663965295',
				title: 'What everyone should know about secure development',
				description: 'Secure development is a wide topic that covers many parts security. To make sure you learn how it all fits together, Marit will start by explaining the broad view before she narrows it down into more details. First, she introduces the core security concepts in development and what a Software Development Lifecycle (SDLC) is. Then, she presents how security fits into the SDLC. Lastly, she narrows secure development to a certain topic to make sure you get some tricks and tips you can bring home. Choose between security headers, security in CI/CD pipelines or how to write logs that enable the Incident Response Team!',
				prereqs: 'None',
				targetAudience: 'Anyone curious about secure development, and anyone who are involved in software development'
			},
			{
				id: 1,
				workshop: false,
				date: getDateParts(new Date('2023-09-18')),
				time: '18.00 - 19.00',
				place: 'IFI UiO, room Caml (Gaustadalléen 23B)',
				language: 'english',
				stream: true,
				author: 'Kamilla Stevenson og Randi Gustad are Software Engineers at Sopra Steria. They are core members of the secure development community at their company, and has the role Security Champions in their projects',
				link: 'https://discord.gg/2zwkdRRFQp?event=1137778480952639660',
				title: 'An Introduction to the CIA Principles',
				description: 'In this talk, Randi and Kamilla will give an introduction to the CIA principles - Confidentiality, Integrity, and Availability. These are the pillars of information security and useful for anyone working within the security domain. They provide practical examples to make it more fun to learn! \nNext semester, Kamilla and Randi will visit us again and have a workshop on Threat Modelling! The practical tasks are perfect exercises to be more prepared for the workshop!',
				prereqs: 'None',
				targetAudience: 'Everyone involved in security'
			},
			{
				id: 2,
				workshop: false,
				date: getDateParts(new Date('2023-10-16')),
				time: '17.00 - 19.00',
				place: 'Høyskolen Kristiania, room KAU-B1-02',
				language: 'norsk',
				stream: true,
				author: 'Alexander Hatlen, IT-Sikkerhetsansvarlig (tidligere både lærling, support og drift) i Horten kommune og Per-Ole Fanuelsen, IT-rådgiver server/infrastrukturansvarlig i Horten kommune',
				link: 'https://discord.gg/2zwkdRRFQp?event=1137778978183200819',
				title: 'Hva gjør egentlig IT-avdelinga i en middels, norsk kommune?',
				description: 'IT-konsulenter og -rådgivere i norske kommuner opplever at mange har et inntrykk av at kommune-norge kjører legacy IT-systemer. Riktignok har de en del av det, som er en kunst i seg selv å drifte på en trygg måte, men de gjør også moderne arbeid. Ja, de har containere, sky og CI/CD pipelines. De gjør det aller, aller meste selv. Kommuner er noen av de største arbeidsplassene vi har i Norge og det gir muligheter for et perfekt sted å gro sin IT-kompetanse. Det samme gjelder offentlige arbeidsplasser generelt, som fylkeskommuner og etater. \nKom og hør hvilke ansvar man har i en kommunal IT-avdeling, hvordan de er bygd opp i organisasjonen, omfanget av hva de drifter og supporterer, og hvordan de gjør nettopp det. De dykker fra organisasjonsstruktur og helt ned i hvilke CI/CD-pipelines de bruker. \nHorten kommune er en middels stor norsk kommune, 1 time sør for Oslo, med ca 28500 innbyggere. Hvis du lurer på hvor mange servere, lokasjoner og aksesspunkter de har må du dukke opp på foredraget! Alexander og Per-Ole blir igjen etter presentasjonen for å prate om hvordan det er å arbeide i offentlig sektor, eller å ta et dypdykk ned i Powershell-koden de kjører. \nKeywords: Skalering, nettverk, servere, virtualisering, backup, lagring, IoT-plattform, automasjon, utvikling, CI/CD, lønn og arbeidsliv, applikasjonsdrift.',
				prereqs: 'Nysgjerrighet!',
				targetAudience: 'Alle som har tenkt å søke jobb de neste årene. Vi starter med noe for absolutt alle, og utvikler oss til å fortelle om produktene/systemene vi bruker på et middels teknisk nivå, der enkelte detaljer vil gå over hodet på noen i kortere perioder.'
			},
			{
				id: 3,
				workshop: false,
				date: getDateParts(new Date('2023-10-30')),
				time: '17.00 - 19.00',
				place: 'IFI UiO, room Caml (Gaustadalléen 23B)',
				language: 'english',
				stream: true,
				link: 'https://discord.gg/2zwkdRRFQp?event=1137779413673574480',
				title: 'What the Fluff is a Red Team: Warstories and Career Advice',
				author: 'Eirik is a senior security consultant and operator as a part of a team performing red team operations, TIBER, assumed breach assessments and detection validation exercises. Responsibilities include designing and conducting network operations; simulating threat actors to identify risk, improve client’s detection and response capabilities through short and long-term engagements and develop novel TTPs with the team. Eirik is an occasional host of the Norwegian security podcast 5H3LLCAST and have held talks at both HackCon and Sikkerhetsfestivalen.',
				description: 'Red Team War Stories and Career Advice: How to Go from Part-Time Sales Associate to Working Remotely on an International Red Team. Perhaps you\'ve heard about "red teaming". This talk will cover the differences between penetration testing, red teaming, and what a red team wants from you, should you want to become part of one. \nEirik\'s career path is exciting and inspiring! We are lucky to have him share his experience and give us useful advices to go forth with a red team career.',
				prereqs: 'Some knowledge or interest in penetration testing, red teaming, social engineering, and network and infrastructure security come in handy',
				targetAudience: 'Students and young career professionals looking to break into infosec and cyber security'
			},
			{
				id: 4,
				workshop: false,
				date: getDateParts(new Date('2023-11-20')),
				time: '18.00 - 19.00',
				place: 'Høyskolen Kristiania, room KAU-B1-02',
				language: 'english',
				stream: true,
				link: '',
				author: 'Millie, our very own Association President!',
				title: 'TBA',
				description: 'TBA',
				prereqs: 'TBA',
				targetAudience: 'TBA'
			},
			{
				id: 5,
				workshop: true,
				date: getDateParts(new Date('2023-12-04')),
				time: '17.00 - 20.00',
				place: 'IFI UiO, room Caml (Gaustadalléen 23B)',
				language: 'english',
				stream: true,
				link: 'https://discord.gg/2zwkdRRFQp?event=1137779704418541630',
				author: 'Oslo CTF',
				title: 'Juleavslutning med PST sin julekalender',
				description: 'Ta rollen som alvebetjent og løs CTF-oppgaver i PST sin julekalender! Eller jobb på det du vil og bare bli med på en sosial avlsutning før juleferien <3',
				prereqs: 'Ta med din egen laptop!',
				targetAudience: 'Alle! <3'
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
