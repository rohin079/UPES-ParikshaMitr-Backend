import { Controller, Get, Query, UseGuards  } from '@nestjs/common';
import { StudentService } from './student.service';
import { TeacherJwtGuard } from 'src/guards/teacher-jwt.guard';

@Controller('teacher/student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @UseGuards(TeacherJwtGuard)
  @Get('search-student')
  searchStudent(
    @Query('ans_sheet_number') ans_sheet_number: string,
    @Query('ans_sheet_number') subject: string,
    @Query('ans_sheet_number') subject_code: string,
    @Query('ans_sheet_number') course: string,
    @Query('ans_sheet_number') Slot: string,
    @Query('ans_sheet_number') sap_id: string
  ) {
    return this.studentService.searchStudent(ans_sheet_number, subject, subject_code, course, Slot, sap_id);
  }
  @UseGuards(TeacherJwtGuard)
  @Get('Search-sap')
  getStudentAttendanceBySapId(
    @Query('sap_id') sap_id: string,
  ) {
    return this.studentService.getStudentAttendanceBySapId(sap_id);
  }
}
