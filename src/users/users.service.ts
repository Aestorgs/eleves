import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import collect from 'collect.js';
import { Matieres } from 'src/entities/matiere.entity';
import { User } from 'src/entities/users.entety';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}
  
  //j'affiche tout les utilisateurs

  findAll() {
    return this.users.find();
  }
  
  //j'affiche tout les utilisateurs par id avec leurs matieres

  findById(id: number) {
    return this.users.find({
      relations: {
        matieres: true,
      },
      where: { id },
    });
  }
  
  //j'affiche tout les utilisateurs par id avec leurs matieres avec leurs moyennes

  async findByMatiereId(id: number) {
    const user = await this.users.findOne({
      relations: { matieres: true },
      where: { id },
    });
    const matieres: Matieres = user.matieres;
    const ArrayObjects: object[] = [];
    const objects1: object = { notes: matieres[0].notes };
    const objects2: object = { notes: matieres[1].notes };
    const collection = collect([objects1, objects2]).avg((all) => all.notes);
    const users: User = user;
    const listObject: object = new Object({
      firstname: users.firstname,
      lastname: users.lastname,
      class: users.class,
      notesMoyennes: collection,
    });
    ArrayObjects.push(listObject);
    return ArrayObjects;
  }
}
