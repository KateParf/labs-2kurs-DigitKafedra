import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[red]'
})
export class RedDirective {
    constructor(private elementRef: ElementRef) {
        this.elementRef.nativeElement.style.color = 'red';
    }
}