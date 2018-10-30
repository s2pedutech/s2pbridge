import { ChangeDetectorRef, Component, Injectable, OnInit } from '@angular/core';

import {BehaviorSubject} from 'rxjs';
import {MediaMatcher} from '@angular/cdk/layout';
import { languages } from '../code';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
    
})
export class SidemenuComponent implements OnInit {

    currentContent;
    lang = languages;
    mobileQuery: MediaQueryList;
    test = `
    #include <iostream> 
    using namespace std;
    int main ()         
    {                 
        cout << "Hello World!";
        return 0;
    }`;
  fillerNav = Array.from({length: 25}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 25}, () =>
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut');

  private _mobileQueryListener: () => void;

 
  showContent(i)
  {
    this.currentContent = this.fillerContent[i];
  }
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
      
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }
    
    ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
