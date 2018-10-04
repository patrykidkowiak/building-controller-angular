import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulbDetailsComponent } from './bulb-details.component';

describe('BulbDetailsComponent', () => {
  let component: BulbDetailsComponent;
  let fixture: ComponentFixture<BulbDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulbDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulbDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
