import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  menuOpen:string = 'yes';
  isopen:boolean = true;
  mode:string = 'side';

  @ViewChild('sidenav') public sidenav;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
          // handle XSmall breakpoint
          console.log("handle XSmall breakpoint");
          this.isopen = false;
          this.menuOpen = "no";
          this.mode = "push";
      }
      if (result.breakpoints[Breakpoints.Small]) {
          // handle Small breakpoint
          console.log("handle Small breakpoint");
          this.isopen = false;
          this.menuOpen = "no";
          this.mode = "push";
      }
      if (result.breakpoints[Breakpoints.Medium]) {
          // handle Medium breakpoint
          console.log("handle Medium breakpoint");
          this.isopen = false;
          this.menuOpen = "no";
          this.mode = "push";
      }
      if (result.breakpoints[Breakpoints.Large]) {
          // handle Large breakpoint
          console.log("handle Large breakpoint");
          this.isopen = true;
          this.menuOpen = "yes";
          this.mode = "side";
      }
      if (result.breakpoints[Breakpoints.XLarge]) {
          // handle XLarge breakpoint
          console.log("handle XLarge breakpoint");
          this.isopen = true;
          this.menuOpen = "yes";
          this.mode = "side";
      }
    });

  }

  toggleMenu($event){
    if($event == 'toggle'){
      this.sidenav.toggle();

    } else {
      this.menuOpen = $event;
    }

  }

  toggleExpandMenu(){
    this.isopen = !this.isopen;
    this.menuOpen = this.isopen ? 'yes' : 'no';
  }
}
