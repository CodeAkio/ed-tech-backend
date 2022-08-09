import { StudentsRepositoryInMemory } from '@modules/enrollments/repositories/in-memory/StudentsRepositoryInMemory';

import { AppError } from '@shared/errors/AppError';

import { DeleteStudentUseCase } from './DeleteStudentUseCase';

let deleteStudentUseCase: DeleteStudentUseCase;
let studentsRepositoryInMemory: StudentsRepositoryInMemory;

describe('Delete Student', () => {
  beforeEach(() => {
    studentsRepositoryInMemory = new StudentsRepositoryInMemory();
    deleteStudentUseCase = new DeleteStudentUseCase(studentsRepositoryInMemory);
  });

  it('should be able to delete a student', async () => {
    const createdStudent = await studentsRepositoryInMemory.create({
      name: 'Pedro de Souza',
      email: 'pedro@email.com',
      cpf: '999.999.999-99',
      ra: '42',
    });

    await deleteStudentUseCase.execute({
      id: createdStudent.id,
    });

    const student = await studentsRepositoryInMemory.findById(
      createdStudent.id,
    );

    expect(student).toBeNull();
  });

  it('should be able to return an error when student id does not exists', async () => {
    await expect(
      deleteStudentUseCase.execute({
        id: 42,
      }),
    ).rejects.toEqual(new AppError('User not found', 404));
  });
});
