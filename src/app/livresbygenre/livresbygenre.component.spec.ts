import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivresbygenreComponent } from './livresbygenre.component';

describe('LivresbygenreComponent', () => {
  let component: LivresbygenreComponent;
  let fixture: ComponentFixture<LivresbygenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivresbygenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivresbygenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
