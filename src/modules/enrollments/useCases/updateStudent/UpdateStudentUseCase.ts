import { Student } from '@modules/enrollments/infra/typeorm/entities/Student';
import { IStudentsRepository } from '@modules/enrollments/repositories/IStudentsRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  id: number;
  name: string;
  email: string;
}

@injectable()
class UpdateStudentUseCase {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}
  async execute({ id, name, email }: IRequest): Promise<Student> {
    const updatedStudent = await this.studentsRepository.update({
      id,
      name,
      email,
    });

    return updatedStudent;
  }
}

export { UpdateStudentUseCase };
