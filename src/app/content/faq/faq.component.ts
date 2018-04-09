import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(private http: Http) { 
  	let link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
	let apiLink = link + 'cats';

	this.http.get(apiLink).subscribe(res => console.log(res.text()));
  }

  ngOnInit() {
  }
  resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response ${captchaResponse}:`);

    	///validate this key with google GET https://www.google.com/recaptcha/api/siteverify?secret=your_secret&response=response_string&remoteip=user_ip_address
    	///IF correct then send email by here
    }
}
