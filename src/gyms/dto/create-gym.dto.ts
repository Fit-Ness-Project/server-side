import { User } from '../../user/entities/user.entity';
export class CreateGymDto {
  gymName: string;
  imgUrl: string;
  rating: number;
  description: string;
  fields: string;
  price: number;
  members: User;
  isAvailable: boolean;
  latitude: string;
  longitude: string;
  adress: string;
}
