import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulbCreateComponent } from './bulb-create.component';

describe('BulbCreateComponent', () => {
  let component: BulbCreateComponent;
  let fixture: ComponentFixture<BulbCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulbCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulbCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
