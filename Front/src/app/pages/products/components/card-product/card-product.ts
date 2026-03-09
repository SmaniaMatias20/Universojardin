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
  @Input() count!: number;


  getWhatsappLink(): string {

    const phone = '541162559206'; // tu número

    const message = `Hola! Me interesa el recurso "${this.title}" con precio ${this.price === 0 ? 'Gratis' : '$' + this.price}.`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }
}