import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './employee.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name)
    private employeeModel: Model<Employee>,
  ) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = await this.employeeModel.create(createEmployeeDto);

    return employee;
  }

  async findAll(limit: number) {
    const employee = await this.employeeModel.find().limit(limit);
    if (employee.length == 0) {
      return null;
    }
    return employee;
  }

  async findOne(id: string) {
    const employee = await this.employeeModel.findById(id);
    if (!employee) {
      return null;
    }
    return employee;
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.employeeModel.findByIdAndUpdate(
      id,
      updateEmployeeDto,
    );
    if (!employee) {
      return null;
    }
    return employee;
  }

  async remove(id: string) {
    const employee = await this.employeeModel.findByIdAndRemove(id);
    if (!employee) {
      return null;
    }
    return employee;
  }
}
