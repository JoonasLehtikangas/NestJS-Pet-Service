import { Body, Controller, Get, Post, Param, Patch, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiResponse  } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreatePetDto, UpdatePetDto } from './dto/create-pet.dto';
import { Pet } from './entities/pet.entity';
import { PetsService } from './pets.service';

@Controller('pets')
@ApiTags('pets')
export class PetsController {
    constructor(private readonly petsService: PetsService) {}

    // listens POST request from localhost:3000/pets
    // And calls petsService.insertPet function
    @Post()
    @ApiOperation({ summary: "Create a Pet"})
    @ApiCreatedResponse({
        status: 200,
        description: "The Pet created successfully",
        type: Pet
    })
    createPet(
        @Body() CreatePetDto: CreatePetDto
    ): Pet {
        return this.petsService.insertPet(CreatePetDto);
    }
    
    // listens GET request from localhost:3000/pets
    // And calls petsService.getPets function
    @Get()
    @ApiOperation({ summary: "Get all Pets"})
    @ApiResponse({
        status: 200,
        description: "OK, Pets found",
        type: Pet
    })
    getAllPets(): Pet[]{
        return this.petsService.getPets();
    }

    // listens GET request from localhost:3000/pets/ID
    // And calls petsService.getSinglePet function
    @Get(':id')
    @ApiOperation({ summary: "Get a single Pet"})
    @ApiResponse({status: 200, description: "OK, Pet found", type: Pet})
    @ApiResponse({status: 404, description: "Pet ID not found!"})
    getPet(@Param('id') id: string): Pet {
        return this.petsService.getSinglePet(id);
    }

    // listens PATCH request from localhost:3000/pets/ID
    // And calls petsService.updateSignlePet function
    @Patch(':id')
    @ApiOperation({ summary: "Update Pet's data"})
    @ApiResponse({status: 200, description: "OK, Pet updated", type: Pet})
    @ApiResponse({status: 404, description: "Pet ID not found!"})
    updatePet(
        @Param('id') id: string,
        @Body() UpdatePetDto: UpdatePetDto
    ): any{
        return this.petsService.updateSignlePet(id, UpdatePetDto);
    }

    // listens DELETE request from localhost:3000/pets/ID
    // And calls petsService.deletePet function
    @Delete(':id')
    @ApiOperation({ summary: "Delete Pet"})
    @ApiResponse({status: 200, description: "OK, Pet deleted"})
    @ApiResponse({status: 404, description: "Pet ID not found!"})
    deletePet(
        @Param('id') id: string,
    ): Pet{
        return this.petsService.deletePet(id);
    }

}
