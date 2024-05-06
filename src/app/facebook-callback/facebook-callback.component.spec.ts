import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookCallbackComponent } from './facebook-callback.component';

describe('FacebookCallbackComponent', () => {
  let component: FacebookCallbackComponent;
  let fixture: ComponentFixture<FacebookCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookCallbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
