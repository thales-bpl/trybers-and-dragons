import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static numberOfInstancesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.numberOfInstancesCreated += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf.numberOfInstancesCreated;
  }
}

export default Dwarf;