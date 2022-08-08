import { Student } from '@modules/enrollments/infra/typeorm/entities/Student';
import { IStudentsRepository } from '@modules/enrollments/repositories/IStudentsRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

interface IRequest {
  name: string;
  email: string;
  cpf: string;
  ra: string;
}

@injectable()
class CreateStudentUseCase {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  async execute({ name, email, cpf, ra }: IRequest): Promise<Student> {
    const studentAlreadyExists = await this.studentsRepository.findByRa(ra);

    if (studentAlreadyExists) {
      throw new AppError('Student already exists!');
    }

    const student = await this.studentsRepository.create({
      name,
      email,
      cpf,
      ra,
    });

    return student;
  }
}

export { CreateStudentUseCase };
