import { Injectable, OnInit } from '@angular/core';
import { Product } from './produtos/produtos';

export interface ItemCarrinho {
  name: string,
  price: number,
  desc: string,
  id: number,
  qtd: number,
  img: string
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private items: ItemCarrinho[] = [];

  constructor() {
    if (localStorage.getItem("carrinho")) {
      const car = JSON.parse(localStorage.getItem("carrinho") || "");
      this.items = car as ItemCarrinho[];
    }

  }

  getAllItems() {
    return this.items;
  }
  getQtd() {
    return this.items.length;
  }
  saveItem(newItem: Product, qtd: number) {
    let oldQtd = 0;
    const oldItem = this.items.find(item => item.id === newItem.id);
    if (oldItem) {
      oldQtd = oldItem.qtd;
      const index = this.items.indexOf(oldItem);
      this.items.splice(index, 1);
    }


    const prodCar: ItemCarrinho = {
      id: newItem.id,
      desc: newItem.desc,
      name: newItem.name,
      img: newItem.img,
      price: newItem.price * (qtd + oldQtd),
      qtd: (qtd + oldQtd)
    };
    this.items.push(prodCar);
    localStorage.setItem("carrinho", JSON.stringify(this.items));
  }

  cleanCar() {
    this.items = [];
    localStorage.clear();
  }

  removeItem(id: number) {
    const item = this.items.find(item => item.id === id) as ItemCarrinho;

    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(this.items));
    //this.items = this.items.filter(item => item.id !== id);
  }

  editQtdItem(qtd: number, id: number) {
    const item = this.items.find(item => item.id === id) as ItemCarrinho;
    const index = this.items.indexOf(item);
    item.price = item.price / item.qtd * qtd;
    item.qtd = qtd;
    this.items[index] = item;
    localStorage.setItem("carrinho", JSON.stringify(this.items));
  }
}

