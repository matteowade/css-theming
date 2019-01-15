import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelectMenuComponent } from './custom-select-menu.component';

describe('CustomSelectMenuComponent', () => {
  let component: CustomSelectMenuComponent;
  let fixture: ComponentFixture<CustomSelectMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSelectMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSelectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
