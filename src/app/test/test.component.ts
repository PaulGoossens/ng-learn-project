import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title: string;
  username: string;
  phone: string;
  mobile: string;

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
    this.title = 'App Test';
    this.username = 'paulgooss3ns';
    this.phone = '0553010847';
    this.mobile = '0618214350';

    this.focusInput('#username');
  }

  focusInput(selector) {
    const element = this.renderer.selectRootElement(selector);
    element.focus();
  }

}
