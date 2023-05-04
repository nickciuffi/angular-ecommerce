import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {

  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    assunto: ["", [
      Validators.minLength(5),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11)
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(10),
      Validators.required
    ]]
  })

  constructor(
    private fb: FormBuilder
  ) { }


  sendMessage() {
    alert("Mensagem enviada");
    this.formContato.reset()
  }

}
