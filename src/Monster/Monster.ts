import { SimpleFighter } from '../Fighter';

class Monster implements SimpleFighter {
  public _lifePoints: number;
  public _strength: number;

  constructor(lifePoints?: number, strength?: number) {
    this._lifePoints = lifePoints || 85;
    this._strength = strength || 63;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) this._lifePoints -= attackPoints;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;