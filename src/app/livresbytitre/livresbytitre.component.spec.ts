import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivresbytitreComponent } from './livresbytitre.component';

describe('LivresbytitreComponent', () => {
  let component: LivresbytitreComponent;
  let fixture: ComponentFixture<LivresbytitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivresbytitreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivresbytitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
