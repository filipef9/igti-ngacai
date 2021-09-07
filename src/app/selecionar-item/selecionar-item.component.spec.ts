import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarItemComponent } from './selecionar-item.component';

describe('SelecionarItemComponent', () => {
  let component: SelecionarItemComponent;
  let fixture: ComponentFixture<SelecionarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
