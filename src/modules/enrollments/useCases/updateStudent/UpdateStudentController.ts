import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateStudentUseCase } from './UpdateStudentUseCase';

class UpdateStudentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email } = request.body;

    const updateStudentUseCase = container.resolve(UpdateStudentUseCase);

    const updatedStudent = await updateStudentUseCase.execute({
      id: Number(id),
      name,
      email,
    });

    return response.status(200).json(updatedStudent);
  }
}

export { UpdateStudentController };
