import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAgainstMaterialComponent } from './user-against-material.component';

describe('UserAgainstMaterialComponent', () => {
  let component: UserAgainstMaterialComponent;
  let fixture: ComponentFixture<UserAgainstMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAgainstMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAgainstMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
