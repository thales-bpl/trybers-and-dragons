import Archetype from '../Archetypes';
import Energy from '../Energy';
import Fighter, { SimpleFighter } from '../Fighter';
import Race from '../Races';
import Elf from '../Races/Elf';
import Mage from '../Archetypes/Mage';
import getRandomInt from '../utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string, race?: Race, archetype?: Archetype) {
    this._race = race || new Elf(name, getRandomInt(1, 10));
    this._archetype = archetype || new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return { ...this._energy };
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  public specialCrit(enemy: SimpleFighter): void {
    const critMultiplier = 0.2 * getRandomInt(6, 8);
    const critDamage = this._strength * critMultiplier;
    enemy.receiveDamage(critDamage);
    console.log(`It's a Crit! You hit for x${critMultiplier} damage`);
  }

  public specialLifesteal(enemy: SimpleFighter): void {
    const initEnemyHealth = enemy.lifePoints;
    enemy.receiveDamage(this._strength);
    const damageDealt = initEnemyHealth - enemy.receiveDamage(this._strength);
    const lifeSteal = damageDealt / 2;
    this._lifePoints += lifeSteal;
    if (this._lifePoints > this._maxLifePoints) {
      this._lifePoints = this._maxLifePoints;
    }
    console.log(`You fed off enemy's health! You healed ${lifeSteal} HP`);
  }
}

export default Character;