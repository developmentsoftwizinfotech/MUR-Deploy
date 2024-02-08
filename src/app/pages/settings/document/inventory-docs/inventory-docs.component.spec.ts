import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDocsComponent } from './inventory-docs.component';

describe('InventoryDocsComponent', () => {
  let component: InventoryDocsComponent;
  let fixture: ComponentFixture<InventoryDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
