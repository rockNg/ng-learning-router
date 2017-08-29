import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterComponentComponent } from './router-component.component';

describe('RouterComponentComponent', () => {
  let component: RouterComponentComponent;
  let fixture: ComponentFixture<RouterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
