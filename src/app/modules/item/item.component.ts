import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;
  optionArr = ['0', '1', '2', '3', '4', '5'];

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  goToItemDetail = (id: number) => {
    this.router.navigate(['item-detail', id]);
  };
}
