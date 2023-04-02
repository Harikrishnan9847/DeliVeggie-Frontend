import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from '../services/product.service';
import { ProductDetails } from '../models/productDetails';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let productService: ProductService;
  let datePipe: DatePipe;
  const mockProduct: ProductDetails = {
    id: '1',
    name: 'Product 1',
    entryDate: new Date(),
    priceWithReduction: 10
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ],
      imports: [HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ productid: '1' })
          }
        },
        {
          provide: ProductService,
        },
        DatePipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    datePipe = TestBed.inject(DatePipe);
    spyOn(productService, 'getById').and.returnValue(of(mockProduct));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the product id correctly', () => {
    expect(component.productId).toBe('1');
  });

  it('should get the product by id', () => {
    expect(productService.getById).toHaveBeenCalledWith('1');
  });

  it('should set the product and formatted date correctly', () => {
    expect(component.product).toEqual(mockProduct);
    expect(component.datePipeString).toBe(datePipe.transform(mockProduct.entryDate, 'MMM d, y'));
  });
});
