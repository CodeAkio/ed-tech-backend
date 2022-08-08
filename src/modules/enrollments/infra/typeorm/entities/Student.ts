import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('students')
class Student {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  ra: string;

  @Column()
  cpf: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export { Student };
