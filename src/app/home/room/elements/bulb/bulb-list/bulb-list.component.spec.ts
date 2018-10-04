import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulbListComponent } from './bulb-list.component';

describe('BulbListComponent', () => {
  let component: BulbListComponent;
  let fixture: ComponentFixture<BulbListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulbListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
