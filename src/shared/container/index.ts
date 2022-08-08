import { StudentsRepository } from '@modules/enrollments/infra/typeorm/repositories/StudentsRepository';
import { IStudentsRepository } from '@modules/enrollments/repositories/IStudentsRepository';
import { container } from 'tsyringe';

container.registerSingleton<IStudentsRepository>(
  'StudentsRepository',
  StudentsRepository,
);
