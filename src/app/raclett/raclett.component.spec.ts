import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaclettComponent } from './raclett.component';

describe('RaclettComponent', () => {
  let component: RaclettComponent;
  let fixture: ComponentFixture<RaclettComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaclettComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaclettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
