import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemarkComponent } from './cinemark.component';

describe('CinemarkComponent', () => {
  let component: CinemarkComponent;
  let fixture: ComponentFixture<CinemarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
