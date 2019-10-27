import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosNovoComponent } from './usuarios-novo.component';

describe('UsuariosNovoComponent', () => {
  let component: UsuariosNovoComponent;
  let fixture: ComponentFixture<UsuariosNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
