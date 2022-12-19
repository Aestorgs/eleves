import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Matieres } from 'src/entities/matiere.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MatieresService {
  @InjectRepository(Matieres) private readonly matieres: Repository<Matieres>;

  // j'affiche les matieres 
  findAll() {
    return this.matieres.find();
  }
}
