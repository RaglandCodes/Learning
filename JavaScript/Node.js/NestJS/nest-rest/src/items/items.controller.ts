import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
@Controller('items')
export class ItemsController {
  @Get()
  // Using @Get will create an endpoint for /items
  findAll(): string {
    return 'Get All';
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `${createItemDto}`;
  }
}
