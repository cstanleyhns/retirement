<template>
  <div class="countdown">
    <h1 class="countdown-title">Countdown to Retirement</h1>
    <p class="countdown-text">{{ daysLeft }} days left until retirement</p>
    <p class="countdown-text">{{ weeksLeft }} weeks left until retirement</p>
    <p class="countdown-text">{{ monthsLeft }} months left until retirement</p>
    <p class="countdown-text">{{ yearsLeft }} years left until retirement</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    document.title = 'Our retirement page';
  },
  data() {
    return {
      retirementDate: new Date('2027-09-01'),
      currentDate: new Date(),
    }
  },
  computed: {
    daysLeft() {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const diffDays = Math.round(Math.abs((this.retirementDate - this.currentDate) / oneDay));
      return diffDays;
    },
    weeksLeft() {
      const oneWeek = 7 * 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const diffWeeks = Math.round(Math.abs((this.retirementDate - this.currentDate) / oneWeek));
      return diffWeeks;
    },
    monthsLeft() {
      const oneMonth = 30 * 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const diffMonths = Math.round(Math.abs((this.retirementDate - this.currentDate) / oneMonth));
      return diffMonths;
    },
    yearsLeft() {  
      const oneYear = 365 * 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const diffYears = (Math.abs((this.retirementDate - this.currentDate) / oneYear));
      
      return diffYears.toFixed(2);
    },
  },
}
</script>

<style>
.countdown {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.countdown-text {
  font-size: 36px;
  color: #1c1c1c;
  margin-top: 0;
}

.countdown-title {
  font-size: 46px;
  font-weight: bold;
  color: #1c1c1c;
  margin-top: 0;
}
</style>
