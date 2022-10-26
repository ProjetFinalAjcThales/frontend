import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterMonPanierComponent } from './consulter-mon-panier.component';

describe('ConsulterMonPanierComponent', () => {
  let component: ConsulterMonPanierComponent;
  let fixture: ComponentFixture<ConsulterMonPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterMonPanierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterMonPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
