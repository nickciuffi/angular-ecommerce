import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.scss']
})
export class ProdutoCardComponent {

  @Input() name = "";
  @Input() price = 0;
  @Input() desc = "";
  @Input() img = "";
  @Input() id = 0;
  @Input() qtdEstoque = 0;

  ngOnChanges() {
    if (this.img) {
      this.img = `../../assets/${this.img}`
    }
  }

}
