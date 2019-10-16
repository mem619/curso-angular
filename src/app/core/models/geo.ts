export class Geo {
  lng: string = null;
  lat: string = null;

  constructor(geo?: Geo | any) {
    if (geo) {
      Object.assign(this, geo);
    }
  }
}
