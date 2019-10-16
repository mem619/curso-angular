export class Promise {
  id: number = null;
  date: string = null;
  message: string = null;
  userId: number = null;

  constructor(promise?: Promise | any) {
    if (promise) {
      Object.assign(this, promise);
    }
  }
}
