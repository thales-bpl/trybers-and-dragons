import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  receiveDamage(attackPoints: number): number;
  attack(enemy: Fighter): void;
  levelUp(): void;
  specialCrit(enemy: Fighter): void;
  specialLifesteal(enemy: Fighter): void;
}

export default Fighter;