import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  saveProductArray: any = [];
  employee_name: any;
  empcode: any;
  device: any;
  client_id: any;
  storeData: any
  editData: any
  statusValue: boolean = false

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem("editData") || '{}'));
    this.editData = JSON.parse(localStorage.getItem("editData") || '{}')
    if (this.editData != null) {
      this.statusValue = true
      this.employee_name = this.editData.employee_name
      this.empcode = this.editData.empcode
      this.device = this.editData.device
      this.client_id = this.editData.client_id
    }
  }

  newProductDetails: any;
  addEmployee(employee_name: any) {
    localStorage.setItem("employee_name", this.employee_name)
    localStorage.setItem("empcode", this.empcode)
    localStorage.setItem("device", this.device)
    localStorage.setItem("client_id", this.client_id)
    if ((localStorage.getItem("employee_name") || localStorage.getItem("empcode") || localStorage.getItem("device") || localStorage.getItem("device")) == 'undefined') {
      alert("Please fill all manadatory fields!")
    } else {
      this.saveProductArray = []
      this.employee_name = localStorage.getItem("employee_name")
      this.empcode = localStorage.getItem("empcode")
      this.device = localStorage.getItem("device")
      this.client_id = localStorage.getItem("client_id")

      var dataObj = {
        "employee_name": this.employee_name,
        "empcode": this.empcode,
        "device": this.device,
        "client_id": this.client_id
      }
      this.newProductDetails = dataObj


      if (localStorage.getItem("saveProductArray") === null || JSON.parse(localStorage.getItem("saveProductArray") || '{}').length === 0) {
        this.saveProductArray.push(dataObj)
        localStorage.setItem("saveProductArray", JSON.stringify(this.saveProductArray))
        alert("Product saved successfully!")
        this.router.navigate(['allProduct'])
      } else {
        this.storeData = JSON.parse(localStorage.getItem("saveProductArray") || '{}');
        var sameData: Boolean = false

        for (let i = 0; i < this.storeData.length; i++) {
          var element = this.storeData[i];
          if (element.employee_name == employee_name) {
            localStorage.setItem("saveProductArray", JSON.stringify(this.storeData))
            sameData = true;
            alert("This Data has already saved!")
            break;
          }
        }

        if (sameData) {
          var storeData = JSON.parse(localStorage.getItem("saveProductArray") || '{}')
          var newData = new Set(storeData)
          storeData = [...newData]
          console.log(storeData);
          localStorage.setItem("saveProductArray", JSON.stringify(storeData))
        } else {
          this.storeData.push(this.newProductDetails)
          localStorage.setItem("saveProductArray", JSON.stringify(this.storeData))
          alert("Product saved successfully!")
          this.router.navigate(['allProduct'])
        }
      }
    }
  }

}
