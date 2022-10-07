import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  isPlayerCrossMove: boolean = true;
  activeTiles: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCellClicked(){
    this.activeTiles ++;
    this.switchPlayer();
  }

  switchPlayer(){
    this.isPlayerCrossMove = !this.isPlayerCrossMove;
    console.log(this.isPlayerCrossMove);
  }

  restartGame(){
    window.location.reload();
  }
}
