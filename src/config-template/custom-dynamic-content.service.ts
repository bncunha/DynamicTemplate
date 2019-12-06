import { Injectable } from '@angular/core';
import { DynamicContentInterface, MapComponents } from 'projects/dynamic-component/src/public-api';
import { mappingComponents } from './mapping-components';

@Injectable({
  providedIn: 'root'
})
export class CustomDynamicContentService implements DynamicContentInterface {
  mapComponents: MapComponents[] = mappingComponents;

  constructor() { }
}
