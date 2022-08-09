import { StudentsRepositoryInMemory } from '@modules/enrollments/repositories/in-memory/StudentsRepositoryInMemory';

import { ListStudentsUseCase } from './ListStudentsUseCase';

let listAvailableCarsUseCase: ListStudentsUseCase;
let studentsRepositoryInMemory: StudentsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    studentsRepositoryInMemory = new StudentsRepositoryInMemory();
    listAvailableCarsUseCase = new ListStudentsUseCase(
      studentsRepositoryInMemory,
    );
  });

  it('should be able to list all available students', async () => {
    const student = await studentsRepositoryInMemory.create({
      name: 'Pedro de Souza',
      email: 'pedro@email.com',
      cpf: '999.999.999-99',
      ra: '42',
    });

    const students = await listAvailableCarsUseCase.execute();

    expect(students).toEqual([student]);
  });
});
