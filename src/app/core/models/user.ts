import { Phone } from './phone';
import { Address } from './address';

export class User {
  id: number = null;
  name: string = null;
  lastName: string = null;
  userName: string = null;
  image: string = null;
  phones: Phone[] = [];
  addresses: Address[] = [];

  constructor(user?: User  | any) {
    if (user) {
      Object.assign(this, user);
    }
  }
}
