import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PRODUCT_CATEGORIES } from '../../constants/product-item-type.constant';


export interface DropdownItem {
  label: string;
  gender: string;
  type: string;
}

export interface DropdownGroup {
  title: string;
  items: DropdownItem[];
}

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  dropdowns: DropdownGroup[];

  constructor() {
    this.dropdowns = [
      {
        title: 'Men',
        items: Object.entries(PRODUCT_CATEGORIES.men).map(([key, value]) => ({
          label: value.label,
          gender: 'men',
          type: key
        }))
      },
      {
        title: 'Women',
        items: Object.entries(PRODUCT_CATEGORIES.women).map(([key, value]) => ({
          label: value.label,
          gender: 'women',
          type: key
        }))
      }
    ];
  }
}