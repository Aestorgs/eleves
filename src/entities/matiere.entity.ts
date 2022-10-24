import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './users.entety';

@Entity('matieres')
export class Matieres {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, default: '' })
  matiere: string;

  @Column({ nullable: false, default: '' })
  notes: string;

  @ManyToOne(() => User, (users) => users.matieres)
  users: User;
}
