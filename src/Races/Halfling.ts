import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static numberOfInstancesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.numberOfInstancesCreated += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfling.numberOfInstancesCreated;
  }
}

export default Halfling;