import { ICreateStudentDTO } from '@modules/enrollments/dtos/ICreateStudentDTO';
import { IUpdateStudentDTO } from '@modules/enrollments/dtos/IUpdateStudentDTO';
import { Student } from '@modules/enrollments/infra/typeorm/entities/Student';

import { IStudentsRepository } from '../IStudentsRepository';

class StudentsRepositoryInMemory implements IStudentsRepository {
  students: Student[] = [];

  async list(): Promise<Student[]> {
    return this.students;
  }

  async findById(id: number): Promise<Student | null> {
    const student = this.students.find((student) => student.id === id);

    if (!student) return null;

    return student;
  }

  async findByRa(ra: string): Promise<Student | null> {
    const student = this.students.find((student) => student.ra === ra);

    if (!student) return null;

    return student;
  }

  async create({ name, email, ra, cpf }: ICreateStudentDTO): Promise<Student> {
    const student = new Student();

    const id = this.students.length > 0 ? this.students.length + 1 : 1;

    Object.assign(student, {
      id,
      name,
      email,
      ra,
      cpf,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.students.push(student);

    return student;
  }

  async update({ id, name, email }: IUpdateStudentDTO): Promise<Student> {
    const studentIndex = this.students.findIndex(
      (student) => student.id === id,
    );

    this.students[studentIndex].name = name;
    this.students[studentIndex].email = email;
    this.students[studentIndex].updated_at = new Date();

    return this.students[studentIndex];
  }

  async delete(id: number): Promise<void> {
    this.students = this.students.filter((student) => student.id !== id);
  }
}

export { StudentsRepositoryInMemory };
