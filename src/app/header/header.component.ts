import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public carrinho: CarrinhoService
  ) { }


  getCarrinhoQtd() {
    return this.carrinho.getQtd();
  }

}
