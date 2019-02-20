import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedGroupComponent } from './nested-group.component';

describe('NestedGroupComponent', () => {
  let component: NestedGroupComponent;
  let fixture: ComponentFixture<NestedGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
