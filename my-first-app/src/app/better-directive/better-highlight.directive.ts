import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor : string = 'transparent';
  @Input() highlightColour : string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor : string = this.defaultColor;

  constructor(private render : Renderer2 , private elRef : ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseover(eventDate : Event) {
    //this.render.setStyle(this.elRef.nativeElement, 'background-color' , 'blue');
    this.backgroundColor = this.highlightColour
  }

  @HostListener('mouseleave') mouseleave(eventDate : Event) {
    // this.render.setStyle(this.elRef.nativeElement, 'background-color' , 'transparent');
    this.backgroundColor = this.defaultColor
  }



}
