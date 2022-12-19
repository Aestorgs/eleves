import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // je crée une route pour afficher tout les utilisateurs
  @Get('')
  getUsers() {
    return this.usersService.findAll();
  }
  
  // je crée une route pour afficher les utilisateur par id avec leurs matierre 
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findById(id);
  }

  //je crée une route pour afficher les utilisateur par id avec leurs matierre avec leurs moyennes
  @Get(':id/matieres')
  getUsersMatiere(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findByMatiereId(id);
  }
}
