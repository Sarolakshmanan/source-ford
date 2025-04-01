import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLifeCycleComponent } from './product-life-cycle.component';

describe('ProductLifeCycleComponent', () => {
  let component: ProductLifeCycleComponent;
  let fixture: ComponentFixture<ProductLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLifeCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
