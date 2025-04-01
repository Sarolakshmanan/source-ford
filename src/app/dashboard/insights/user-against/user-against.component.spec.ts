import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAgainstComponent } from './user-against.component';

describe('UserAgainstComponent', () => {
  let component: UserAgainstComponent;
  let fixture: ComponentFixture<UserAgainstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAgainstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAgainstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
