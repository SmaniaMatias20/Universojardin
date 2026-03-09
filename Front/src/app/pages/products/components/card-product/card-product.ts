import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.html',
  styleUrl: './card-product.css',
})
export class CardProduct {

  @Input() url_image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() price!: any;

}