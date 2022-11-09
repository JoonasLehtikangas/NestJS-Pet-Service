import { Injectable, NotFoundException } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { CreatePetDto } from './dto/createPet.dto';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
    pets: Pet[] = [];

    insertPet(pet: CreatePetDto): Pet{
        // const id = this.pets.length;
        const id = nanoid();
        const new_pet = new Pet(id, pet.name, pet.description, pet.date_of_birth);
        // this.pets[id] = new_pet;
        this.pets.push(new_pet);
        return new_pet;
    }

    getPets(): Pet[] {
        return [...this.pets];
    }

    getSinglePet(id: string): Pet {
        const idx = this.pets.findIndex((pena) => pena.pet_id === id);
        if(idx < 0){
            throw new NotFoundException('Could not find matching ID');
        }
        return {...this.pets[idx]}
    }

    updateSignlePet(id: string, CreatePetDto: CreatePetDto): Pet{
        // ToDo:
        // - find the pet and if found do the following
        //   - change the name if it received from the request
        return null;
    }
}
