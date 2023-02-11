import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit , OnChanges , DoCheck , AfterContentInit , AfterContentChecked ,
  AfterViewInit , AfterViewChecked ,OnDestroy {

  @Input('srvElement') element: { type: string, name: string, content: string }
  @Input() name: string;
  @ViewChild('heading' , {static : true}) header:ElementRef;

  constructor() {
    console.log("constructor iniated");
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    console.log(this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngDoCheck(): void {
    console.log('do check')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes iniated");
    console.log(changes)
  }

  ngOnInit(): void {
    console.log(this.header.nativeElement.textContent);
  }
}
