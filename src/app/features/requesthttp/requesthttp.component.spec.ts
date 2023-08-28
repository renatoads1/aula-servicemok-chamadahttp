import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesthttpComponent } from './requesthttp.component';

describe('RequesthttpComponent', () => {
  let component: RequesthttpComponent;
  let fixture: ComponentFixture<RequesthttpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequesthttpComponent]
    });
    fixture = TestBed.createComponent(RequesthttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
