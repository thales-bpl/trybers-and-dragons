import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter {
  // lifePoints: number;
  // strength: number;
  defense: number;
  energy?: Energy;
  // receiveDamage(attackPoints: number): number;
  // attack(enemy: SimpleFighter): void;
  specialCrit(enemy: SimpleFighter): void;
  specialLifesteal(enemy: SimpleFighter): void;
  levelUp(): void;
}

export default Fighter;