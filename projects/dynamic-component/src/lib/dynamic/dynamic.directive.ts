import { Directive, OnInit, OnDestroy, Input, ComponentFactoryResolver, ComponentRef, ViewContainerRef, ElementRef, Inject } from '@angular/core';
import {  MapComponents } from '../../interfaces/map-components.interface';
import { DynamicService } from './dynamic.service';

@Directive({
  selector: '[libDynamic]'
})
export class DynamicDirective implements OnInit, OnDestroy {
  @Input() type: string;
  @Input() inputs: any[];
  @Input() outputs: any[];

  private componentRef: ComponentRef<{}>;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    private elementRef: ElementRef,
    private dynamicService: DynamicService
  ) { }

  ngOnInit() {
    console.log(this.dynamicService.mapComponents);
    const componentToLoad = this.getDynamicContent();
    if (this.type && componentToLoad) {
      this.componentRef = this.createComponent(componentToLoad.component);
    }
  }

  private getDynamicContent() {
    if (!this.type) return
    return this.dynamicService.mapComponents.find(component => component.type.toUpperCase() == this.type.toUpperCase());
  }
  
  private createComponent(component: any) {
    setTimeout(() => {
      this.elementRef.nativeElement.remove();     
    });
    let factory =  this.componentFactoryResolver.resolveComponentFactory(component);
    return this.container.createComponent(factory);
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

}
