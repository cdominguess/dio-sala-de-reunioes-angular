import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesSalaComponent } from './detalhes-sala.component';

describe('DetalhesSalaComponent', () => {
  let component: DetalhesSalaComponent;
  let fixture: ComponentFixture<DetalhesSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
