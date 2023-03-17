import { Component, OnInit, ViewChild,  } from '@angular/core';
import { OrderData } from '../interfaces/models.interface';
import { OrderListService } from '../services/order-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
 
  ngOnInit() { }
}