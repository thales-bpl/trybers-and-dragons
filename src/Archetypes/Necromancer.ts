import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static instancesCreated = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.instancesCreated += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer.instancesCreated;
  }
}

export default Necromancer;