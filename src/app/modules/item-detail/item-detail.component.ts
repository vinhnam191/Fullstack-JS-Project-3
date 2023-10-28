import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/models';
import { CommonService } from 'src/app/services/commom.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  subscription!: Subscription;
  itemDetail!: Item;
  id!: number;

  constructor(
    private readonly commonService: CommonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.commonService.getItemList().subscribe(res => {
      res.forEach(item => {
        if (item.id === this.id) {
          this.itemDetail = item;
        }
      });
    });
  }
}
