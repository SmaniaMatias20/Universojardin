import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contacts',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Definimos el formulario
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  sendWhatsApp() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const nombre = encodeURIComponent(this.contactForm.value.nombre);
    const email = encodeURIComponent(this.contactForm.value.email);
    const mensaje = encodeURIComponent(this.contactForm.value.mensaje);

    const numero = "5491162559206"; // ⚠️ tu número de WhatsApp con código de país, sin + ni espacios
    const texto = `Hola mi nombre es ${nombre} y mi email es ${email}. ${mensaje}`;

    // Redirige a WhatsApp Web o App móvil
    window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
  }

}
