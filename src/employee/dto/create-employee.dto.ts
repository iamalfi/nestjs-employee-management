import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'An string of employeeFullName', type: String })
  employeeFullName: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'An string of jobTitle', type: String })
  jobTitle: string;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'An number of phoneNumber', type: Number })
  phoneNumber: number;
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'An array of answers', type: String })
  email: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'An string of address', type: String })
  address: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'An string of city', type: String })
  city: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'An string of state', type: String })
  state: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'An string of primaryEmergencyContact',
    type: String,
  })
  primaryEmergencyContact: string;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'An number of primaryEmergencyContactPhoneNumber',
    type: Number,
  })
  primaryEmergencyContactPhoneNumber: number;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'An string of primaryEmergencyContactRelationship',
    type: String,
  })
  primaryEmergencyContactRelationship: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'An string of secondaryEmergencyContact',
    type: String,
  })
  secondaryEmergencyContact: string;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'An number of secondaryEmergencyContactPhoneNumber',
    type: Number,
  })
  secondaryEmergencyContactPhoneNumber: number;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'An string of secondaryEmergencyContactRelationship',
    type: String,
  })
  secondaryEmergencyContactRelationship: string;
}
