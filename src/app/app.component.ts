import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clubes de Ciencia Bolivia';
  constructor(private fb: FacebookService) {

    let initParams: InitParams = {
      appId: '1151858264952529',
      xfbml: true,
      version: 'v3'
    };

    fb.init(initParams);

  }

}
