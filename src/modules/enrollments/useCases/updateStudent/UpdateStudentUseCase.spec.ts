import { StudentsRepositoryInMemory } from '@modules/enrollments/repositories/in-memory/StudentsRepositoryInMemory';

import { UpdateStudentUseCase } from './UpdateStudentUseCase';

let updateStudentUseCase: UpdateStudentUseCase;
let studentsRepositoryInMemory: StudentsRepositoryInMemory;

describe('Update Student', () => {
  beforeEach(() => {
    studentsRepositoryInMemory = new StudentsRepositoryInMemory();
    updateStudentUseCase = new UpdateStudentUseCase(studentsRepositoryInMemory);
  });

  it('should be able to update only name and e-mail of a student', async () => {
    const student = await studentsRepositoryInMemory.create({
      name: 'Pedro de Souza',
      email: 'pedro@email.com',
      cpf: '999.999.999-99',
      ra: '42',
    });

    const updatedStudent = await updateStudentUseCase.execute({
      id: student.id,
      name: 'Marcelo Oliveira',
      email: 'marcelo@email.com',
    });

    expect(updatedStudent.name).toEqual('Marcelo Oliveira');
    expect(updatedStudent.email).toEqual('marcelo@email.com');
  });
});
