import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDeletarComponent } from './produto-deletar.component';

describe('ProdutoDeletarComponent', () => {
  let component: ProdutoDeletarComponent;
  let fixture: ComponentFixture<ProdutoDeletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoDeletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
