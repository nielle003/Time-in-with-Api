import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private apiUrl = 'http://localhost/attendance.php';
  constructor(private http: HttpClient) { }

  getDetails(): Observable<any> {
    return this.http.get<any>(this.apiUrl);

  }
}
