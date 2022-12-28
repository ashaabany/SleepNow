import { Component } from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(800, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class AppComponent {
  title = 'sleep-now';

  time = new Date();
  currentTime = this.time.getTime();
  wakeUpTimeOne = this.currentTime;
  wakeUpTimeTwo = this.currentTime;
  wakeUpTimeThree = this.currentTime;
  wakeUpTimeNapOne = this.currentTime;
  wakeUpTimeNapTwo = this.currentTime;
  wakeUpTimeNapThree = this.currentTime;
  sleepNowClicked = false;
  gifUrl = "C:/SleepNowApp/sleep-now/src/app/sleep.png"

  //newTime: number = this.time.setTime(this.time.getTime());

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date().getTime();
      this.time = new Date();
    }, 1000);  // update time every second (1000 milliseconds)

    document.body.style.backgroundColor = '#37474f';

  }

  sleepNow() {
    this.sleepNowClicked = true;
    const minutesAdded = new Date().getMinutes() + 15;
    this.wakeUpTimeOne = new Date().setHours(new Date().getHours() + 9, minutesAdded)
    this.wakeUpTimeTwo = new Date().setHours(new Date().getHours() + 7, minutesAdded + 30)
    this.wakeUpTimeThree = new Date().setHours(new Date().getHours() + 6, minutesAdded)
    this.wakeUpTimeNapOne = new Date().setHours(new Date().getHours() + 4, minutesAdded + 30)
    this.wakeUpTimeNapTwo = new Date().setHours(new Date().getHours() + 3, minutesAdded)
    this.wakeUpTimeNapThree = new Date().setHours(new Date().getHours() + 1, minutesAdded + 30)
  }

  // do it so you set an interval with gettime + 15, so every second it updates the shown time to time + 15
  // plusFifteen() {
  //   var timeNow = this.time.getMinutes() + 15;
  //   this.newTime = this.time.setMinutes(timeNow);
  // }

  // minusFifteen() {
  //   var timeNow = this.time.getMinutes() - 15;
  //   this.newTime = this.time.setMinutes(timeNow);
  // }
}
