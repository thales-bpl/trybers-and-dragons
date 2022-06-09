import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;
  specialCrit(enemy: SimpleFighter): void;
  specialLifesteal(enemy: SimpleFighter): void;
  levelUp(): void;
}

export default Fighter;