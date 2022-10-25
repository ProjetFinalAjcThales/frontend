import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterleslivresComponent } from './consulterleslivres.component';

describe('ConsulterleslivresComponent', () => {
  let component: ConsulterleslivresComponent;
  let fixture: ComponentFixture<ConsulterleslivresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterleslivresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterleslivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
