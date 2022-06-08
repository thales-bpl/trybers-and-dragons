import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static instancesCreated = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.instancesCreated += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Warrior.instancesCreated;
  }
}

export default Warrior;