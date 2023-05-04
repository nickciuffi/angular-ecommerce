import { Injectable } from '@angular/core';
import { Product, produtos } from './produtos/produtos';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: Product[] = produtos;

  constructor() { }

  getAll(): Product[] {
    return this.produtos;
  }

  getOne(id: number): Product | string {
    const prod = this.produtos.find(prod => prod.id === id);
    if (!prod) return "Produto não encontrado"
    return prod
  }
}
