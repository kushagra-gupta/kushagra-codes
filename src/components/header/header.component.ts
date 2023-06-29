import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'kc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule
  ],
  standalone: true
})
export class HeaderComponent implements OnInit {
  scrolled?: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrolled = window.scrollY > document.body.offsetHeight;
  }

}
