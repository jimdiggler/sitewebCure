export class Flat {
  constructor(
    public id: string,
    public name: string,
    public type: string,
    public door: string,
    public address: string,
    public zipCode: string,
    public location: string,
    public area: string,
    public bed: string,
    public floor: string,
    public kitchenEquipments: string,
    public bathRoomEquipments: string,
    public otherEquipments: string,
    public exterior: string,
    public practical: string,
    public photo1: string,
    public photo2: string,
    public photo3: string,
    public lowSeason: number,
    public pickSeason: number,
    public ownerId: string
  ) {}
}
