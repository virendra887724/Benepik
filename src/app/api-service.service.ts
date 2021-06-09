import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpService: HttpClient) { }

  // getData() {
  //   return this.httpService.get("https://benepik.org/kpmg/APIs/News/Get_post");
  // }

  getEmployeeData(requestBody: any): Observable<any> {
    return this.httpService.get('https://benepik.org/kpmg/APIs/News/Get_post', requestBody)
  }
}
