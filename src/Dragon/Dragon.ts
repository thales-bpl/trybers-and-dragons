import Monster from '../Monster';
import { SimpleFighter } from '../Fighter';

class Dragon extends Monster {
  constructor() {
    super(999, 150);
  }

  dragonClaw(enemy: SimpleFighter): void {
    this.attack(enemy);
  }

  breathOfFire(enemy: SimpleFighter[]): void {
    enemy.forEach((target) => {
      this.attack(target);
      target.receiveDamage(20);
    });
    console.log('The dragon burns everything in its wake!');
  }

  ascension(enemy?: SimpleFighter): void {
    console.log('The dragon flew away into the clouds...');
    if (enemy) {
      this._strength *= 1.5;
      this.attack(enemy);
      console.log('The dragon swoops in against his prey!');
      this._strength /= 0.3;
    }
  }
}

export default Dragon;