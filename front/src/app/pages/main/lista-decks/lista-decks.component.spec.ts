import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDecksComponent } from './lista-decks.component';

describe('ListaDecksComponent', () => {
  let component: ListaDecksComponent;
  let fixture: ComponentFixture<ListaDecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDecksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
