import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseRequestComponent } from './promise-request.component';

describe('PromiseRequestComponent', () => {
  let component: PromiseRequestComponent;
  let fixture: ComponentFixture<PromiseRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiseRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
