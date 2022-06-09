import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  private _enemies: SimpleFighter[];

  constructor(player1: Fighter, enemies: SimpleFighter[]) {
    super(player1);
    this._enemies = enemies;
  }

  public fight(): number {
    this._enemies.forEach((enemy) => {
      while (this.player1.lifePoints > 0 && enemy.lifePoints > 0) {
        this.player1.attack(enemy);
        enemy.attack(this.player1);
      }
    });
    return super.fight();
  }
}

export default PVE;