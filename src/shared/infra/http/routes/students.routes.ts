import { CreateStudentController } from '@modules/enrollments/useCases/createStudent/CreateStudentController';
import { ListStudentsController } from '@modules/enrollments/useCases/listStudents/ListStudentsController';
import { Router } from 'express';

const studentsRoutes = Router();

const createStudentController = new CreateStudentController();
const listStudentsController = new ListStudentsController();

studentsRoutes.get('/', listStudentsController.handle);
studentsRoutes.post('/', createStudentController.handle);

export { studentsRoutes };
