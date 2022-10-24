import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Matieres } from './matiere.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, default: '' })
  firstname: string;

  @Column({ nullable: false, default: '' })
  lastname: string;

  @Column({ nullable: false, default: '' })
  class: string;

  @OneToMany(() => Matieres, (matiere) => matiere.users)
  matieres: Matieres;
}
