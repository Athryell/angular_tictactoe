import { trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent implements OnInit {
  @Input() isCrossTurn: boolean = true;
  @Output() cellClick = new EventEmitter<boolean>();
  isActive: boolean = false;
  printCross: boolean = true;
  iconX?: string | null = "bi bi-x-lg";
  iconO?: string | null = "bi bi-circle";

  constructor() {}

  ngOnInit(): void {
    if(localStorage.getItem('firstPlayerIcon') == null || localStorage.getItem('secondPlayerIcon') == null) return;
    this.iconX = "bi bi-"+localStorage.getItem('firstPlayerIcon');
    this.iconO = "bi bi-"+localStorage.getItem('secondPlayerIcon');
  }

  onClick() {
    if (this.isActive) return;
    this.isActive = true;
    this.cellClick.emit();
    this.isCrossTurn ? (this.printCross = true) : (this.printCross = false);
  }
}
