import { HttpClientModule } from '@angular/common/module.d-CnjH8Dlt';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { DetailService } from 'src/app/service/details.service';
@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
  standalone:false,
})

export class TimePage implements OnInit {
  formattedTime: string = '';
  attendanceRecords: any[] = [];

   
  constructor(private apiService: ApiService, private router: Router, private detailService: DetailService) {}

  ngOnInit() {
    this.apiService.getCurrentTime().subscribe(res => {
      const now = new Date();
      const today = now.toISOString().split('T')[0]; // "2025-06-19"
      const fullDateTime = `${today}T${res.datetime}`; // "2025-06-19T13:45:00"

      const dateObj = new Date(fullDateTime);

      if (!isNaN(dateObj.getTime())) {
        this.formattedTime = dateObj.toLocaleTimeString([], {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
      }
    });



    this.detailService.getDetails().subscribe((res: any)=> {
      this.attendanceRecords = res.records;
    });



  }
  viewAttendanceReport() {
    // Navigate to attendance report page
    this.router.navigate(['/attendance-report']);
  }
   viewDetails(date: string) {
    console.log('Navigating with date:', date);
    this.router.navigate(['/details'], { queryParams: { date: date } });
;
  }
}
