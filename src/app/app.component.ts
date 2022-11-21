import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

interface Survey {
  title: string;
  questions:any[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'question-time';

  survey$: Observable<Survey> = new Observable();
  answers:any[] = [];

  constructor(private http:HttpClient) {
  }

  ngOnInit() {
    this.survey$ = this.http
    .get<Survey>("https://q4gkevhaej.execute-api.eu-west-2.amazonaws.com/basicLambdaTest?id=789e8526-7ff9-4d5a-b3d6-2302a3d5f499");
  }

  onSubmit() {
    console.log("HERE")
    console.log(this.answers)
    //this.http.post("https://q4gkevhaej.execute-api.eu-west-2.amazonaws.com/addQuestion", {});
  }

}
