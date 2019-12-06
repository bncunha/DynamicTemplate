import { Injectable } from '@angular/core';
import { MapComponents } from '../../interfaces/map-components.interface';
import { DynamicContentInterface } from '../../interfaces/dynamic-content.interface';

@Injectable({
  providedIn: 'root'
})
export class DynamicService implements DynamicContentInterface {
  mapComponents: MapComponents[];

  constructor() { }
}
