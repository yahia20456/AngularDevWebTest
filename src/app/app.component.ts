import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dev-web-angular';

  myScriptElement: HTMLScriptElement;
  secontElement: HTMLScriptElement;

  constructor() {
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = 'assets/js/plugins.js';
    this.secontElement = document.createElement('script');
    this.secontElement.src = 'assets/js/theme.js';
    document.body.appendChild(this.myScriptElement);
    document.body.appendChild(this.secontElement);
  }
}
