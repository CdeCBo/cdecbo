import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(private http: Http) { 
  }

  ngOnInit() {
  }
  resolved(captchaResponse: string) {
       console.log(`Resolved captcha with response ${captchaResponse}:`);
      let sec = "6LeT51EUAAAAAP8uJ4fRfjhaARi6NYLYIRSp5yJx";
      let link = 'https://www.google.com/recaptcha/api/siteverify';


      /*this.http.post(link, {secret: sec, response: captchaResponse}).subscribe(res => 
        console.log(res.text())
        );*/
    	 
  }

}
