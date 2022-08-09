import { Student } from '@modules/enrollments/infra/typeorm/entities/Student';
import { IStudentsRepository } from '@modules/enrollments/repositories/IStudentsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListStudentsUseCase {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  async execute(): Promise<Student[]> {
    const students = await this.studentsRepository.list();

    return students;
  }
}

export { ListStudentsUseCase };
