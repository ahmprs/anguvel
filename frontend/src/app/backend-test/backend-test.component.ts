import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-backend-test",
  templateUrl: "./backend-test.component.html",
  styleUrls: ["./backend-test.component.css"]
})
export class BackendTestComponent implements OnInit {
  constructor(private http: HttpService) {}

  ngOnInit() {}

  rsp = "---";
  btnGetDataClick(event) {
    this.rsp = "OOPS!";

    this.http.postGetJson(
      // "http://localhost:8000/api/say-hello",
      "/api/say-hello",
      {},
      d => {
        console.log(d);

        try {
          if (d["ok"] != 1) return;
          this.rsp = d["result"];
        } catch (err) {}
      },
      err => {
        console.log(err);
      }
    );
  }
}