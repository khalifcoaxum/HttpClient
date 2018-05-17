import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

interface UserReponse {
	login: string,
	bio: string,
	company: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  constructor(private http: HttpClient){}

  //Http Get Request
  ngOnInit(): void {
  	this.http.get<UserReponse>('https://api.github.com/users/krc56').subscribe(
  		data =>{
  			console.log("User Name: " + data.login);
  	},
  	(err:HttpErrorResponse) => {
  		if (err.error instanceof Error) {
  			console.log ("Error occured");
  		}
  		else {
  			console.log("Service side error");
  		}
  	})

  	//Http Post Request 
  	const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
  		title: 'foo',
  		body: 'bar',
  		userId: 1
  	})
		.subscribe(
			res => {
				console.log(res);
			}
		)
  }
}
