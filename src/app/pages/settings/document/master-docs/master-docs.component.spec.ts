import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDocsComponent } from './master-docs.component';

describe('MasterDocsComponent', () => {
  let component: MasterDocsComponent;
  let fixture: ComponentFixture<MasterDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
