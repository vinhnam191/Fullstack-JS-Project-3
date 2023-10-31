import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  itemDetailForm = new FormGroup({
    quantity: new FormControl(1, {
      nonNullable: true,
    }),
  });
  subscription!: Subscription;
  itemDetail!: Item;
  optionArr = ['1', '2', '3', '4', '5'];

  constructor(private readonly commonService: CommonService) {}

  ngOnInit(): void {
    this.itemDetail = this.commonService.getItemDetail();
  }

  onAddToCart() {
    this.commonService.addItemToCart({
      ...this.itemDetail,
      quantity: Number(this.itemDetailForm.controls.quantity.value),
    });
    window.alert(`${this.itemDetail.name} added to cart successfully`);
  }
}
