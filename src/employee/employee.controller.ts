import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Res,
  Put,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { response } from 'express';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Employee } from './employee.schema';
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Employee created succesfully!',
    type: Employee,
  })
  @ApiBadRequestResponse({ description: 'you cannot create.Try again!' })
  @ApiBody({ type: CreateEmployeeDto })
  async create(@Body() createEmployeeDto: CreateEmployeeDto, @Res() response) {
    const responseForm = await this.employeeService.create(createEmployeeDto);
    if (!responseForm) {
      throw new HttpException(
        'Failed to create employee details. Try again!',
        HttpStatus.BAD_REQUEST,
      );
    }
    return response.status(HttpStatus.CREATED).json({
      status: true,
      message: 'employee created successfully',
      responseForm,
    });
  }

  @Get(':limit')
  @ApiNotFoundResponse({ description: 'No employee found' })
  @ApiOkResponse({ description: 'employees fetched successfully!' })
  async findAll(@Param('limit') limit: number, @Res() response) {
    const employee = await this.employeeService.findAll(limit);
    if (!employee || employee.length === 0) {
      throw new HttpException('No employee found', HttpStatus.NOT_FOUND);
    }
    return response.status(HttpStatus.OK).json({
      status: true,
      message: 'employee fetched successfylly',
      employee,
    });
  }

  @Get('getemployee/:id')
  @ApiNotFoundResponse({ description: 'No employee found' })
  @ApiOkResponse({ description: 'employee fetched successfully!' })
  async findOne(@Param('id') id: string, @Res() response) {
    const employee = await this.employeeService.findOne(id);
    if (!employee) {
      throw new HttpException('employee not found', HttpStatus.NOT_FOUND);
    }
    return response.status(HttpStatus.OK).json({
      status: true,
      message: 'employee  fetched successfylly',
      employee,
    });
  }

  @Put(':id')
  @ApiNotFoundResponse({ description: 'No employee found' })
  @ApiOkResponse({ description: 'employee updated successfully!' })
  async update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
    @Res() response,
  ) {
    const employee = await this.employeeService.update(id, updateEmployeeDto);
    if (!employee) {
      throw new HttpException('employee not found', HttpStatus.NOT_FOUND);
    }
    return response.status(HttpStatus.OK).json({
      status: true,
      message: 'employee updated successfylly',
      employee,
    });
  }

  @Delete(':id')
  @ApiNotFoundResponse({ description: 'No employee found' })
  @ApiOkResponse({ description: 'employee deleted successfully!' })
  async remove(@Param('id') id: string, @Res() response) {
    const employee = await this.employeeService.remove(id);
    if (!employee) {
      throw new HttpException('employee not found', HttpStatus.NOT_FOUND);
    }
    return response.status(HttpStatus.OK).json({
      status: true,
      message: 'employee deleted successfylly',
      employee,
    });
  }
}
