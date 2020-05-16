import { Controller, Post, Body } from '@nestjs/common';
import { CreateItemDto } from './items.dto';

@Controller('items')
export class ItemsController {
  @Post()
  createItem(@Body() createItemDto: CreateItemDto) {
    console.log(createItemDto);
    return createItemDto;
  }
}
