import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarSalaComponent } from './atualizar-sala.component';

describe('AtualizarSalaComponent', () => {
  let component: AtualizarSalaComponent;
  let fixture: ComponentFixture<AtualizarSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
