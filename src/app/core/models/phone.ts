export class Phone {
  name: string = null;
  phoneNumber: string = null;
  lada: string = null;

  constructor(phone?: Phone | any) {
    if (phone) {
      Object.assign(this, phone);
    }
  }
}
