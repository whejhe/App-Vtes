import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriptaComponent } from './cripta.component';

describe('CriptaComponent', () => {
  let component: CriptaComponent;
  let fixture: ComponentFixture<CriptaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriptaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
