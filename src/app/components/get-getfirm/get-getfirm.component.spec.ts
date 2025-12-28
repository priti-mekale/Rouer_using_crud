import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGetfirmComponent } from './get-getfirm.component';

describe('GetGetfirmComponent', () => {
  let component: GetGetfirmComponent;
  let fixture: ComponentFixture<GetGetfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetGetfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetGetfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
