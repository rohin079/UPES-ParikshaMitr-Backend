import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EditBundleDto {
  @IsString()
  @IsNotEmpty()
  dateOfExamination: string;
  @IsString()
  @IsNotEmpty()
  subjectName: string;
  @IsNumber()
  @IsNotEmpty()
  roomNumber: string;
  @IsString()
  @IsNotEmpty()
  id: string;
}

export class EditBatchDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNumber()
  @IsNotEmpty()
  numStudents: number;
}
