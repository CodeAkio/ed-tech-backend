import { ICreateStudentDTO } from '@modules/enrollments/dtos/ICreateStudentDTO';
import { IUpdateStudentDTO } from '@modules/enrollments/dtos/IUpdateStudentDTO';
import { Student } from '@modules/enrollments/infra/typeorm/entities/Student';

interface IStudentsRepository {
  list(): Promise<Student[]>;
  findById(id: number): Promise<Student | null>;
  findByRa(ra: string): Promise<Student | null>;
  create(data: ICreateStudentDTO): Promise<Student>;
  update(data: IUpdateStudentDTO): Promise<Student>;
  delete(id: number): Promise<void>;
}

export { IStudentsRepository };
