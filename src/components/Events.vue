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
    day: dateSuffix(date.getDay()),
    month: monthNames[date.getMonth()]
  }
}

export default {
  data() {
    return {
      events: [],
    };
  },
  created() {
    this.events = [
      {
        id: 0,
        date: getDateParts(new Date('2021-08-20')),
        title: 'Workshop #1',
        description: 'This workshop will be an interactive session where you get to learn and test some skills in hacking. Whether you are the CSO, developer/tester or sys admin, the practical lessons of security will be useful and, as it is a game/competition, fun.'
      },
      {
        id: 1,
        date: getDateParts(new Date('2021-09-20')),
        title: 'Workshop #2',
        description: 'This workshop will be an interactive session where you get to learn and test some skills in hacking. Whether you are the CSO, developer/tester or sys admin, the practical lessons of security will be useful and, as it is a game/competition, fun.'
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