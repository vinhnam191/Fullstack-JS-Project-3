import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private readonly commonService: CommonService) {}

  cartItemNumber!: number;

  ngOnInit(): void {
    this.commonService.cartNumber.subscribe(number => {
      this.cartItemNumber = number;
    });
  }
}
