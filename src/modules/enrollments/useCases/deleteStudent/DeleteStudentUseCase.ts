import { IStudentsRepository } from '@modules/enrollments/repositories/IStudentsRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: number;
}

@injectable()
class DeleteStudentUseCase {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}
  async execute({ id }: IRequest): Promise<void> {
    const studentExists = await this.studentsRepository.findById(id);

    if (!studentExists) {
      throw new AppError('User not found', 404);
    }

    await this.studentsRepository.delete(id);
  }
}

export { DeleteStudentUseCase };
