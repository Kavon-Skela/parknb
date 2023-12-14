import { Body, Controller, Post, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger/dist';
import { CreateUserDto } from './dto/createUser.dto';
import { Users } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Creation of a user' })
  @ApiResponse({ status: 200, type: Users })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [Users] })
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }
}
