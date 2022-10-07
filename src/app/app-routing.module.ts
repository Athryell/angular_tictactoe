import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { SetupPlayersComponent } from './pages/setup-players/setup-players.component';

const routes: Routes = [
  {path: '', component: SetupPlayersComponent},
  {path: 'tictactoe', component: BoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
