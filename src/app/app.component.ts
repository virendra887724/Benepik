import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from "./api-service.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUrl: any

  constructor(private router: Router, private apiService: ApiServiceService) {
    // this.apiService.getData().subscribe(data => {
    //   console.log(data)
    // })
  }

  ngOnInit() {
    this.getEmployeeData()
  }

  title = 'Benepik';


  aboutClick() {
    window.location.href = "https://benepik.co.in/benepik/panel/aboutus"
  }

  benepikClick() {
    window.location.href = "https://benepik.co.in/benepik/"
  }

  addEmployee() {
    this.router.navigate(['addEmployee'])
  }

  loginPage() {
    this.router.navigate(['login'])
  }

  getEmployeeData() {
    var jsonData = {
      "client_id": "CO-33",
      "empcode": "2",
      "device": "2",
      "deviceId": "browser",
      "app_version": "28",
      "value": 0
    }
    console.log(jsonData);

    this.apiService.getEmployeeData(jsonData)
      .subscribe
      (
        data => {
          console.log(data);

        }
      )

  }

}
