import { Controller, Get } from '@nestjs/common';
import { MatieresService } from './matieres.service';

@Controller('matieres')
export class MatieresController {
  constructor(private readonly matieresService: MatieresService) {}

  @Get('')
  getMatieres() {
    return this.matieresService.findAll();
  }
}
