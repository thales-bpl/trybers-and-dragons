import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static instancesCreated = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.instancesCreated += 1;
  }
  
  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Mage.instancesCreated;
  }
}

export default Mage;