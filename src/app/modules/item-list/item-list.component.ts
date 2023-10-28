import { Component, OnDestroy, OnInit } from '@angular/core';
import { Item } from 'src/app/models';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/commom.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit, OnDestroy {
  itemList!: Item[];
  subscription!: Subscription;

  constructor(private readonly commonService: CommonService) {}

  ngOnInit(): void {
    this.subscription = this.commonService.getItemList().subscribe(res => {
      this.itemList = res;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
