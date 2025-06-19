import { HttpClientModule } from '@angular/common/module.d-CnjH8Dlt';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
  standalone:false,
})

export class TimePage implements OnInit {
  formattedTime: string = '';

   attendanceRecords = [
    {
      date: '2025-06-17',
      timeIn: '07:36 AM',
      timeOut: '05:07 PM'
    },
    {
      date: '2025-06-16',
      timeIn: '07:46 AM',
      timeOut: '05:32 PM'
    },
    {
      date: '2025-06-13',
      timeIn: '07:59 AM',
      timeOut: '05:17 PM'
    },
    {
      date: '2025-06-11',
      timeIn: '07:52 AM',
      timeOut: '05:17 PM'
    },
    {
      date: '2025-06-10',
      timeIn: '07:59 AM',
      timeOut: null
    }
  ];
  constructor(private apiService: ApiService, private router: Router) {}

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
  }
  viewAttendanceReport() {
    // Navigate to attendance report page
    this.router.navigate(['/attendance-report']);
  }
   viewDetails(date: string) {
    // Navigate to specific attendance detail page
    this.router.navigate(['/attendance-detail', date]);
  }
  //  getTimeOutDisplay(): string {
  //   //return this.currentTimeOut || 'N/A';
  // }
  // isCurrentlyTimedIn(): boolean {
  //   //return this.currentTimeIn !== null && this.currentTimeOut ===
  // 
  //  
  //  null;
  // }
}
