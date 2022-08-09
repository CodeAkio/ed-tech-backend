import { CreateStudentController } from '@modules/enrollments/useCases/createStudent/CreateStudentController';
import { ListStudentsController } from '@modules/enrollments/useCases/listStudents/ListStudentsController';
import { UpdateStudentController } from '@modules/enrollments/useCases/updateStudent/UpdateStudentController';
import { Router } from 'express';

const studentsRoutes = Router();

const createStudentController = new CreateStudentController();
const listStudentsController = new ListStudentsController();
const updateStudentController = new UpdateStudentController();

studentsRoutes.get('/', listStudentsController.handle);
studentsRoutes.post('/', createStudentController.handle);
studentsRoutes.patch('/:id', updateStudentController.handle);

export { studentsRoutes };
