import { Module } from '@nestjs/common';
import { MatieresService } from './matieres.service';
import { MatieresController } from './matieres.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Matieres } from 'src/entities/matiere.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Matieres])],
  controllers: [MatieresController],
  providers: [MatieresService],
})
export class MatieresModule {}
