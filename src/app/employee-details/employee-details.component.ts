import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiServiceService } from "../api-service.service";


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetails implements OnInit {
  getSavedProduct: any

  constructor(private router: Router, private apiService: ApiServiceService) {

  }

  ngOnInit() {
    this.getSavedProduct = localStorage.getItem("saveProductArray")
  }


  getEmployeeData() {
    var jsonData = {
      "client_id": "CO-33",
      "empcode": 2,
      "device": 2,
      "deviceId": "browser",
      "app_version": 28,
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



  displayedColumns: string[] = ['employee_name','client_id', 'empcode', 'device','editProduct'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addEmployee() {
    localStorage.removeItem("editData")
    this.router.navigate(['addEmployee'])
  }

  onEditClick(data: any) {
    console.log(data);
    localStorage.setItem("editData", JSON.stringify(data))
    this.router.navigate(['addEmployee'])
  }

  // dataValue: any
  // onDeleteClick(data: any) {
  //   console.log(data);
  //   this.dataValue = JSON.parse(localStorage.getItem("mergedData") || '{}')
  //   for (let i = 0; i < this.dataValue.length; i++) {
  //     const element = this.dataValue[i];
  //     console.log(element);
  //     if (data.employee_name == element.employee_name) {
  //       localStorage.removeItem(JSON.stringify(element(i)))
  //     }
  //   }
  //   console.log(this.dataValue);

  // }
}

export interface PeriodicElement {
  employee_name: any;
  client_id: number;
  empcode: any;
  device: number;
}

var ELEMENT_DATA: PeriodicElement[] = [
  { employee_name: 'Nike', client_id: 19, empcode: 12, device: 2},
  { employee_name: 'Sam', client_id: 46, empcode: 34, device: 5 },
  { employee_name: 'Doli', client_id: 6, empcode: 3, device: 3},
  { employee_name: 'Shiv', client_id: 92, empcode: 123, device: 22 },
  { employee_name: 'Nemi', client_id: 11, empcode: 34, device: 24 },
  { employee_name: 'Sama', client_id: 107, empcode: 44, device: 12 },
  { employee_name: 'Ludo', client_id: 167, empcode: 56, device: 8 },
  { employee_name: 'Dary', client_id: 194, empcode: 4, device: 2},
  { employee_name: 'Ricky', client_id: 184, empcode: 65, device: 3 },
  { employee_name: 'Nilo', client_id: 297, empcode: 43, device: 7},
  { employee_name: 'Vikas', client_id: 297, empcode: 456, device: 5 },
  { employee_name: 'Gajodhar', client_id: 25, empcode: 6, device: 9},
  { employee_name: 'Raju', client_id: 215, empcode: 76, device: 1 },
  { employee_name: 'Shyam', client_id: 255, empcode: 67, device: 2},
  { employee_name: 'Baburao', client_id: 338, empcode: 12, device: 2},
  { employee_name: 'Ganpatrao', client_id: 35, empcode: 54, device: 2 },
  { employee_name: 'Aapte', client_id: 33, empcode: 33, device: 11},
  { employee_name: 'Totla', client_id: 38, empcode: 9, device: 31 },
  { employee_name: 'Tiwari', client_id: 383, empcode: 90, device: 32},
  { employee_name: 'Seth', client_id: 48, empcode: 88, device: 3 },
];
console.log(ELEMENT_DATA);

var newArray: any = []
var getSavedProduct: any

getSavedProduct = JSON.parse(localStorage.getItem("saveProductArray") || '{}')

for (let i = 0; i < getSavedProduct.length; i++) {
  const element = getSavedProduct[i];
  console.log(element);

  newArray = ELEMENT_DATA.push(element)
}

localStorage.setItem("mergedData", JSON.stringify(ELEMENT_DATA))
localStorage.removeItem("saveProductArray")

