import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from '../services/product.service'
import { ProductListComponent } from './product-list.component';
import { of } from 'rxjs';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../models/product';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let service: ProductService;

  const mockProduct: Product[] = [{
    id: '1',
    name: 'Product 1'
  }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      imports: [HttpClientModule, RouterModule],
      providers:[ {
        provide: ActivatedRoute,
        useValue: {
          queryParams: of({ productid: '1' })
        }
      }]
    })
    .compileComponents();

    service = TestBed.inject(ProductService);
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    spyOn(service, 'getAll').and.returnValue(of(mockProduct));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call GetAll', () => {
    expect(service.getAll).toHaveBeenCalled();
  });

  it('should set the product', () => {
    expect(component.products).toEqual(mockProduct);
  });

});
