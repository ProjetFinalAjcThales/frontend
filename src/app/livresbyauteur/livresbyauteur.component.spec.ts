import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivresbyauteurComponent } from './livresbyauteur.component';

describe('LivresbyauteurComponent', () => {
  let component: LivresbyauteurComponent;
  let fixture: ComponentFixture<LivresbyauteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivresbyauteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivresbyauteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
