import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];

  constructor() {
    setTimeout(() => {
      this.heroes.push("All Might");
    }, 5000);
  }

  ngOnInit(): void {
  }

  isComplete(){
    if (this.heroes.length < 5){
      return false;
    } else{
      return true;
    }
  }

}
