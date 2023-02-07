<template>
	<div class="res">
	  
	  	<b-card-group deck>
			<b-card title="날짜 선택">
		    	<b-card-text>
			    	<FullCalendar :options="calendarOptions" />
			    </b-card-text>
			</b-card>
			<div class="pd5"></div>
			<b-card title="시간 선택">
		    	<b-card-text>
		    		
			    </b-card-text>
			</b-card>
	  	</b-card-group>
	  	
		<div class="mt10">
		    <b-form-textarea id="textarea-no-resize" placeholder="메모를 입력해주세요." rows="4" no-resize></b-form-textarea>
		</div>
		  
		<div class="mt10" v-bind:style="{display: 'grid', textAlign: 'left'}">
			<span class="mb10">2023년 02월 06일 14:30</span>
			<p class="mb10">일정 등록 요청은 실시간 예약 확정이 아닌 예약 접수상태 입니다.</p>
			<p class="mb10"><!-- 일정 등록 접수되었습니다. -->담당자 확인 후 일정 확정여부를 알려드립니다.</p>
			<p class="mb10">예약번호로 일정 조회가능합니다. 예약번호 분실 시 관리자에게 문의바랍니다.</p>
	  		<b-button block>일정 등록 요청</b-button>
	  	</div>
	</div>
</template>

<script>

// bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import bootstrap5Plugin from '@fullcalendar/bootstrap5';


export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin, bootstrap5Plugin ],
        themeSystem: 'bootstrap5',
        initialView: 'dayGridMonth',
        locale: "ko",
        height: 500,
        expandRows: true,
        navLinks: false, // can click day/week names to navigate views
        selectable: true,
        selectMirror: true,
        validRange: {
		  start: new Date()
		},
        dateClick: this.handleDateClick,
        select: function(arg) {
            alert("선택 날짜 : " + arg.startStr);
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
    }//-- calendarOptions
    
  }//-- data
}//-- export

</script>


<style scoped>

	.res{
	    margin: 20px 10px;
    	padding: 80px 10px 60px;
	}
	.res span{
		font-size: 20px;
		font-weight: bold;
	}
	.res .cal{
		margin: 30px 10px;
	}
	
	.res a {
		color: #212529;
	    text-decoration: none;
	}
	
	.fc-toolbar-title{
    	font-size: 20px !important;
    	margin-left: 10px !important;
	}
	
</style>
