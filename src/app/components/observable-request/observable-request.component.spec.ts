import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableRequestComponent } from './observable-request.component';

describe('ObservableRequestComponent', () => {
  let component: ObservableRequestComponent;
  let fixture: ComponentFixture<ObservableRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
