import { ICreateStudentDTO } from '@modules/enrollments/dtos/ICreateStudentDTO';
import { IUpdateStudentDTO } from '@modules/enrollments/dtos/IUpdateStudentDTO';
import { IStudentsRepository } from '@modules/enrollments/repositories/IStudentsRepository';
import { Repository } from 'typeorm';

import dataSource from '@shared/infra/typeorm';

import { Student } from '../entities/Student';

class StudentsRepository implements IStudentsRepository {
  private repository: Repository<Student>;

  constructor() {
    this.repository = dataSource.getRepository(Student);
  }

  async list(): Promise<Student[]> {
    const students = await this.repository.find();

    return students;
  }

  async findById(id: number): Promise<Student | null> {
    const student = await this.repository.findOneBy({ id });

    return student;
  }

  async findByRa(ra: string): Promise<Student | null> {
    const student = await this.repository.findOneBy({ ra });

    return student;
  }

  async create(data: ICreateStudentDTO): Promise<Student> {
    const student = this.repository.create(data);

    await this.repository.save(student);

    return student;
  }

  async update({ id, name, email }: IUpdateStudentDTO): Promise<Student> {
    const student = await this.repository.findOneBy({ id });

    if (!student) {
      throw new Error('User not found to update!');
    }

    student.name = name;
    student.email = email;

    await this.repository.save(student);

    return student;
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

export { StudentsRepository };
