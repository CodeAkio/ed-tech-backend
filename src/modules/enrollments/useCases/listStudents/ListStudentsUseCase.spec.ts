import { StudentsRepositoryInMemory } from '@modules/enrollments/repositories/in-memory/StudentsRepositoryInMemory';

import { ListStudentsUseCase } from './ListStudentsUseCase';

let listStudentsUseCase: ListStudentsUseCase;
let studentsRepositoryInMemory: StudentsRepositoryInMemory;

describe('List Students', () => {
  beforeEach(() => {
    studentsRepositoryInMemory = new StudentsRepositoryInMemory();
    listStudentsUseCase = new ListStudentsUseCase(studentsRepositoryInMemory);
  });

  it('should be able to list all available students', async () => {
    const student = await studentsRepositoryInMemory.create({
      name: 'Pedro de Souza',
      email: 'pedro@email.com',
      cpf: '999.999.999-99',
      ra: '42',
    });

    const students = await listStudentsUseCase.execute();

    expect(students).toEqual([student]);
  });
});
