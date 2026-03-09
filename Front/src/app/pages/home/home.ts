import { Component } from '@angular/core';
import { CardProduct } from '../products/components/card-product/card-product';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CardProduct],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  products: any[] = [];
  featuredProducts: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get<any[]>('assets/data/products.json')
      .subscribe(data => {
        this.products = data;

        // Tomar solo 3 productos destacados
        this.featuredProducts = data.slice(0, 4);
      });
  }

  goToProducts() {
    this.router.navigate(['products']);
  }
}
