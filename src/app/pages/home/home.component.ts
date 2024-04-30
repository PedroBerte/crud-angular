import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GamesService } from '../../services/games.service';
import { gameTypes } from '../../types/gameTypes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private gamesService: GamesService
  ) {}

  games: gameTypes[] = [];

  ngOnInit(): void {
    this.gamesService.getGames().subscribe({
      next: (data) => (this.games = data),
    });
  }

  gameForm = this.formBuilder.group({
    name: [''],
    price: [0],
    category: [''],
    description: [''],
  });

  onSubmit() {
    var newId = 0;
    if (this.games.length >= 1) {
      newId = this.games[this.games.length - 1].id + 1;
    }
    var newGame = { ...this.gameForm.value, id: newId } as gameTypes;

    this.gamesService.postGame(newGame).subscribe({
      next: (data) => this.games.push(data),
    });
  }
}
