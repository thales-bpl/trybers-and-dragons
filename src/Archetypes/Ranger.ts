import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static instancesCreated = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.instancesCreated += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Ranger.instancesCreated;
  }
}

export default Ranger;