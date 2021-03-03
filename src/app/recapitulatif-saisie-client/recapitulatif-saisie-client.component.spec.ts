import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapitulatifSaisieClientComponent } from './recapitulatif-saisie-client.component';

describe('RecapitulatifSaisieClientComponent', () => {
  let component: RecapitulatifSaisieClientComponent;
  let fixture: ComponentFixture<RecapitulatifSaisieClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapitulatifSaisieClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapitulatifSaisieClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
