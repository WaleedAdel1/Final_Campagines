import { Product } from 'src/app/Shared/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  products: Product[];
  filterProduct: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data,
      this.filterProduct = data;
    });

  }

  FiltereProductFunction(searchString: string) {
    return this.products.filter(prod =>
      prod.status.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1);
  }

  ClosingSoon() {
    this.filterProduct = this.FiltereProductFunction('Closing soon');
  }

  Explore() {
    this.filterProduct = this.FiltereProductFunction('Explore');
  }

  SoldOut() {
    this.filterProduct = this.FiltereProductFunction('Sold Out');
  }


}
