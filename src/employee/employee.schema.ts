import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema()
export class Employee {
  @Prop()
  @ApiProperty({ description: 'An string of employeeFullName', type: String })
  employeeFullName: string;
  @Prop()
  @ApiProperty({ description: 'An string of jobTitle', type: String })
  jobTitle: string;
  @Prop()
  @ApiProperty({ description: 'An number of phoneNumber', type: Number })
  phoneNumber: number;
  @Prop()
  @ApiProperty({ description: 'An array of answers', type: String })
  email: string;
  @Prop()
  @ApiProperty({ description: 'An string of address', type: String })
  address: string;
  @Prop()
  @ApiProperty({ description: 'An string of city', type: String })
  city: string;
  @Prop()
  @ApiProperty({ description: 'An string of state', type: String })
  state: string;
  @Prop()
  @ApiProperty({
    description: 'An string of primaryEmergencyContact',
    type: String,
  })
  primaryEmergencyContact: string;
  @Prop()
  @ApiProperty({
    description: 'An number of primaryEmergencyContactPhoneNumber',
    type: Number,
  })
  primaryEmergencyContactPhoneNumber: number;
  @Prop()
  @ApiProperty({
    description: 'An string of primaryEmergencyContactRelationship',
    type: String,
  })
  primaryEmergencyContactRelationship: string;
  @Prop()
  @ApiProperty({
    description: 'An string of secondaryEmergencyContact',
    type: String,
  })
  secondaryEmergencyContact: string;
  @Prop()
  @ApiProperty({
    description: 'An number of secondaryEmergencyContactPhoneNumber',
    type: Number,
  })
  secondaryEmergencyContactPhoneNumber: number;
  @Prop()
  @ApiProperty({
    description: 'An string of secondaryEmergencyContactRelationship',
    type: String,
  })
  secondaryEmergencyContactRelationship: string;
}
export const EmployeeSchema = SchemaFactory.createForClass(Employee);
