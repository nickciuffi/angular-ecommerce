import { Component, OnInit } from '@angular/core';
import { CarrinhoService, ItemCarrinho } from '../carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  items: ItemCarrinho[] = [];
  total = 0;

  constructor(
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.items = this.carrinhoService.getAllItems();
    this.items.forEach((item, index) => {
      this.items[index].img = `../../../assets/${this.items[index].img}`

    })
  }


  removeItem(id: number) {
    this.carrinhoService.removeItem(id);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0)
  }

  handleQtdChange(e: Event, id: number) {
    const input = e.target as HTMLInputElement
    const qtd = input.value;
    this.carrinhoService.editQtdItem(+qtd, id);
  }

}
