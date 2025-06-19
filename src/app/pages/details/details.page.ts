import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/service/details.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone:false
})
export class DetailsPage implements OnInit {

  date: string = "";
  attendanceData: any;
  constructor(private http: HttpClient, private detailService: DetailService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const date = params.get('date');
      console.log("Date from query params:", date);
    });

    this.fetchAttendanceDetails(this.date);
  }

  fetchAttendanceDetails(date: string){
    const url = `http://localhost/attendance.php?date=${date}`;

    this.http.get(url).subscribe(res => {
      this.attendanceData = res;
      console.log('Attendance for the date:', this.attendanceData);
    });
  }

}
