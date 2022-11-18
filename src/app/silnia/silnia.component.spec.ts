import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilniaComponent } from './silnia.component';

describe('SilniaComponent', () => {
  let component: SilniaComponent;
  let fixture: ComponentFixture<SilniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
