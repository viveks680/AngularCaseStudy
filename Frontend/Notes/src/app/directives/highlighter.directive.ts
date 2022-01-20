import { Directive, ElementRef, HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(public el: ElementRef, public renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('yellow');
  }

  highlight(color: string){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
