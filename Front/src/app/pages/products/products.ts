import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardProduct } from './components/card-product/card-product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CardProduct],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {

  products: any[] = [];
  filteredProducts: any[] = [];

  selectedCategory: string = 'Todos';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('assets/data/products.json')
      .subscribe(data => {
        this.products = data;
        this.filteredProducts = data;
      });
  }

  filterCategory(category: string) {
    this.selectedCategory = category;

    if (category === 'Todos') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        p => p.category === category
      );
    }
  }

}