export class CreateUserDto {
  readonly email: string;
  readonly password: string;
  readonly phoneNumber: number;
  readonly passportSeries: string;
  readonly passportNumber: string;
  readonly passportIssuer: string;
  readonly passportDate: string;
  readonly locationRegistration: string;
}
