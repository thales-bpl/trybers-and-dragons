import Battle from './Battle';
import Fighter from '../Fighter';
import getRandomInt from '../utils';

class PVP extends Battle {
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player2 = player2;
  }

  public fight(): number {
    const player1Init = getRandomInt(1, 20);
    const player2Init = getRandomInt(1, 20);
    const turnOrder = player1Init > player2Init;

    while (this._player2.lifePoints > 0 && this.player1.lifePoints > 0) {
      if (turnOrder) {
        this.player1.attack(this._player2);
        this._player2.attack(this.player1);
      }
      this._player2.attack(this.player1);
      this.player1.attack(this._player2);
    }

    return super.fight();
  }
}

export default PVP;