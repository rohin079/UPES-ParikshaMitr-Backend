import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { FlyingService } from './flying.service';
import { CreateFlyingDto, DeleteFlyingDto } from './dto/create_flying.dto';
import { AssignRoomsDto } from './dto/assign-rooms.dto';

@Controller('exam-controller/flying')
export class FlyingController {
  constructor(private readonly flyingService: FlyingService) {}

  @Post('create')
  create(@Body() body: CreateFlyingDto) {
    return this.flyingService.create(body);
  }

  @Patch('assign-rooms')
  assignRooms(@Body() body: AssignRoomsDto) {
    return this.flyingService.assignRooms(body);
  }

  @Get('/by-slot')
  getBySlot(@Query('slot_id') slot_id: string) {
    return this.flyingService.getBySlot(slot_id);
  }

  @Post('complete-duty')
  completeDuty(@Body() body: CreateFlyingDto) {
    return this.flyingService.completeDuty(body);
  }

  @Post('remove')
  remove(@Body() body: DeleteFlyingDto) {
    return this.flyingService.remove(body);
  }
}
