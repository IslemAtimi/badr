import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[important]'
})
export class ImportantDirective {
  @Input("important") x:boolean = false
  constructor(private element:ElementRef) { 
    
    

    console.log(this.x)
  }

  ngOnInit(): void {
    if(this.x){
      this.element.nativeElement.style["text-decoration"] = 'underline'
    }
  }

}
