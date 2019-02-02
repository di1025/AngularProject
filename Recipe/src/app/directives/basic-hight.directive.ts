import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHight]'
})
export class BasicHightDirective implements OnInit {
  constructor(private elementRef:ElementRef){
  }

  ngOnInit() { 
  this.elementRef.nativeElement.style.backgroundColor = 'green';}

}
