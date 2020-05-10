import { Component, OnInit } from "@angular/core";
import { CommonServiceService } from "../common-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  payload: any;
  constructor(private commonService: CommonServiceService) {}

  ngOnInit() {}

  login() {
    console.log("test");
    return;
    this.payload = {
      email: this.email,
      password: this.password,
    };
    this.commonService.postmethod(this.payload).subscribe((data) => {
      if (data.body.success) {
        // content will be added
      }
    });
  }
}
