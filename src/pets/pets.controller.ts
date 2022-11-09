import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiResponse  } from '@nestjs/swagger';
import { CreatePetDto } from './dto/createPet.dto';
import { Pet } from './entities/pet.entity';
import { PetsService } from './pets.service';

@Controller('pets')
@ApiTags('pets')
export class PetsController {
    constructor(private readonly petsService: PetsService) {}

    @Post()
    @ApiOperation({ summary: "Create a Pet"})
    @ApiCreatedResponse({
        description: "The Pet created successfully",
        type: Pet
    })
    createPet(
        // @Body('name') name: string,
        // @Body('description') desc: string,
        // @Body('date_of_birth') date_of_birth: string
        @Body() CreatePetDto: CreatePetDto
    ): Pet {
        return this.petsService.insertPet(CreatePetDto);
    }
    
    @Get()
    @ApiOperation({ summary: "Get all Pets"})
    @ApiResponse({
        status: 200,
        description: "OK"
    })
    getAllPets(): Pet[]{
        // ToDO: replace with service stuff
        //return{"name": "Pluto", "description": "Yeallow and friendly"}
        return this.petsService.getPets();
    }

    @Get(':id')
    @ApiOperation({ summary: "Get a single Pet"})
    @ApiResponse({status: 200, description: "OK"})
    @ApiResponse({status: 404, description: "Pet ID not found!"})
    getPet(@Param('id') id: string): Pet {
        return this.petsService.getSinglePet(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: "Update Pet's data"})
    @ApiResponse({status: 200, description: "OK"})
    @ApiResponse({status: 404, description: "Pet ID not found!"})
    updatePet(
        @Param('id') id: string,
        @Body() CreatePetDto: CreatePetDto
        // @Body('name') name: string,
        // @Body('description') desc: string,
        // @Body('date_of_birth') date_of_birth: string,

    ): any{
        return this.petsService.updateSignlePet(id, CreatePetDto);
    }
}
