<template>
	<div class="res">
		<span><font-awesome-icon icon="fa-regular fa-calendar-check" /></i> 날짜 선택</span>
		
		<div class="cal">
			<FullCalendar :options="calendarOptions" />
		</div>
		
		<span><font-awesome-icon icon="fa-regular fa-clock" /> 시간 선택</span>
	</div>
</template>

<script>

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'


export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        locale: "ko",
        height: 500,
        navLinks: false, // can click day/week names to navigate views
        selectable: true,
        selectMirror: true,
        validRange: {
		  start: new Date()
		},
        dateClick: this.handleDateClick,
        select: function(arg) {
            var title = prompt('일정 추가');
            if (title) {
                this.addEvent({
                    title: title,
                    start: arg.start,
                    end: arg.end,
                    allDay: arg.allDay
                })
            }
            this.unselect();
        },
        eventClick: function(arg) {
            if (confirm('일정을 삭제하시겠습니까?')) {
                arg.event.remove();
            }
        },
        events: [
          { title: 'event 1', date: '2023-02-01' },
          { title: 'event 2', date: '2023-02-02' }
        ]
	  }  
    }
  },
  methods: {
    handleDateClick: function(arg) {
      //alert('date click! ' + arg.dateStr)
    }
  }
}

</script>


<style scoped>

	.res{
		height: 800px;
		margin: 10px;
	}
	.res span{
		font-size: 20px;
		font-weight: bold;
	}
	.res .cal{
		margin: 10px;
	}

</style>
