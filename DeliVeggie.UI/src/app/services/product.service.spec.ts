import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Product[]>', () => {
    const dummyProducts = [
      { id: '1', name: 'Product 1' },
      { id: '2', name: 'Product 2' }
    ];

    service.getAll().subscribe(products => {
      expect(products.length).toBe(2);
      expect(products).toEqual(dummyProducts);
    });

    const req = httpMock.expectOne(`${service.baseUrl}Product/GetAll`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProducts);
  });

  it('should return an Observable<ProductDetails>', () => {
    const dummyProductDetails = { 
      id: '1', 
      name: 'Product 1', 
      entryDate: new Date(),
      priceWithReduction: 200 
    };

    service.getById('1').subscribe(productDetails => {
      expect(productDetails).toEqual(dummyProductDetails);
    });

    const req = httpMock.expectOne(`${service.baseUrl}product/Get/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProductDetails);
  });

});
