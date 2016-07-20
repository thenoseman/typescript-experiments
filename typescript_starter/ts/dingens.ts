class Dingens {
  private _message: string;
  constructor(message: string) {
    this._message = message;
  }
  get message(): string {
    console.log("GETTER CALLED!!");
    return this._message;
  }
}

export = Dingens;
