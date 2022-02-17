import faker from 'faker'

import { IMappable } from './CustomMap';

export class Company implements IMappable{
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string = 'white';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `
      <h2>Company Name: ${this.companyName}</h2>
      <h3>Catch phrase Name: ${this.catchPhrase}</h3>
    `
  }
}