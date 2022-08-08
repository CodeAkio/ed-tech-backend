import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateStudentUseCase } from './CreateStudentUseCase';

class CreateStudentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, cpf, email, ra } = request.body;

    const createStudentUseCase = container.resolve(CreateStudentUseCase);

    const student = await createStudentUseCase.execute({
      name,
      cpf,
      email,
      ra,
    });

    return response.status(201).json(student);
  }
}

export { CreateStudentController };
