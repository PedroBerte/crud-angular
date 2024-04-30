import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  isEditing = false;

  gameForm = this.formBuilder.group({
    id: [0],
    name: ['', Validators.required],
    price: [0, Validators.required],
    category: ['', Validators.required],
    description: ['', Validators.required],
  });

  ngOnInit(): void {
    this.getGames();
  }

  onEditPress(game: gameTypes) {
    this.isEditing = true;
    this.gameForm.setValue(game);
  }

  getGames() {
    return this.gamesService.getGames().subscribe({
      next: (data) => (this.games = data),
    });
  }

  onSubmit() {
    if (this.gameForm.valid) {
      if (this.isEditing) {
        this.gamesService.putGame(this.gameForm.value as gameTypes).subscribe({
          next: () => {
            this.getGames();
            this.isEditing = false;
            this.gameForm.reset();
          },
        });
      } else {
        var newId = 0;
        if (this.games.length >= 1) {
          newId = this.games[this.games.length - 1].id + 1;
        }
        var newGame = { ...this.gameForm.value, id: newId } as gameTypes;

        this.gamesService.postGame(newGame).subscribe({
          next: (data) => this.games.push(data),
        });
      }
      this.gameForm.reset();
    }
  }

  onDelete(id: number) {
    this.gamesService.deleteGame(id).subscribe({
      next: (data) => (this.games = this.games.filter((x) => x.id != id)),
    });
  }
}
