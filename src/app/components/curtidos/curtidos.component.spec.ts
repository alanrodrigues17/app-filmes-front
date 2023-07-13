import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtidosComponent } from './curtidos.component';

describe('CurtidosComponent', () => {
  let component: CurtidosComponent;
  let fixture: ComponentFixture<CurtidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurtidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurtidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
