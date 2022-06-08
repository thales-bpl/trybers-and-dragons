import Archetype from '../Archetypes';
import Energy from '../Energy';
import Fighter from '../Fighter';
import Race from '../Races';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    
  }
}

export default Character;