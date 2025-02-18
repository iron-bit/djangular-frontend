import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockIzqComponent } from './dock-izq.component';

describe('DockIzqComponent', () => {
  let component: DockIzqComponent;
  let fixture: ComponentFixture<DockIzqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DockIzqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockIzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
