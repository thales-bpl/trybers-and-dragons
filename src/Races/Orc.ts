import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static numberOfInstancesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.numberOfInstancesCreated += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Orc.numberOfInstancesCreated;
  }
}

export default Orc;