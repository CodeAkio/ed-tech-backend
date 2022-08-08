import { StudentsRepositoryInMemory } from '@modules/enrollments/repositories/in-memory/StudentsRepositoryInMemory';

import { AppError } from '@shared/errors/AppError';

import { CreateStudentUseCase } from './CreateStudentUseCase';

let createStudentUseCase: CreateStudentUseCase;
let studentsRepositoryInMemory: StudentsRepositoryInMemory;

describe('Create Student', () => {
  beforeEach(() => {
    studentsRepositoryInMemory = new StudentsRepositoryInMemory();
    createStudentUseCase = new CreateStudentUseCase(studentsRepositoryInMemory);
  });

  it('should be able to create a new student', async () => {
    const student = await createStudentUseCase.execute({
      name: 'Pedro de Souza',
      email: 'pedro@email.com',
      cpf: '999.999.999-99',
      ra: '42',
    });

    expect(student).toHaveProperty('id');
  });

  it('should not be able to create a student with exists RA', async () => {
    await createStudentUseCase.execute({
      name: 'Pedro de Souza',
      email: 'pedro@email.com',
      cpf: '999.999.999-99',
      ra: '42',
    });

    await expect(
      createStudentUseCase.execute({
        name: 'Ana Clara Santos',
        email: 'ana@email.com',
        cpf: '888.888.888-88',
        ra: '42',
      }),
    ).rejects.toEqual(new AppError('Student already exists!'));
  });
});
