import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [CommonModule],
  standalone: true

})
export class FooterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }
}
