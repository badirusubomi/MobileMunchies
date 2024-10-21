import { Injectable } from '@nestjs/common';
import { CreateLocationDTO } from 'src/dto/createLocationDTO';

@Injectable()
export class LocationService {
  private locations: CreateLocationDTO[] = [];

  create(location: CreateLocationDTO) {
    this.locations.push(location);
    return 'succesful';
  }

  findAll() {
    return this.locations;
  }

  find(index: number) {
    try {
      return this.locations[index - 1];
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
