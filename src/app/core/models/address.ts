import { Geo }  from './geo';

export class Address {
  street: string = null;
  city: string = null;
  country: string = null;
  geo: Geo = new Geo();

  constructor(address?: Address | any){
    if(address) {
      Object.assign(this, address);
    }
  }
}
