import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup-players',
  templateUrl: './setup-players.component.html',
  styleUrls: ['./setup-players.component.scss'],
})
export class SetupPlayersComponent implements OnInit {
  firstPlayerIcon: string = '';
  secondPlayerIcon: string = '';
  iconXSelected: string = "";
  iconYSelected: string = "";
  isCrossPlayer!: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  setPlayerIcon(isCross: boolean, iconName: string) {
    if (isCross) {
      this.firstPlayerIcon = iconName;
      this.iconXSelected = iconName
    } else {
      this.secondPlayerIcon = iconName;
      this.iconYSelected = iconName;
    }
  }

  startGame(){
    localStorage.setItem("firstPlayerIcon", this.firstPlayerIcon);
    localStorage.setItem("secondPlayerIcon", this.secondPlayerIcon);
    this.router.navigateByUrl('/tictactoe');
  }
}
