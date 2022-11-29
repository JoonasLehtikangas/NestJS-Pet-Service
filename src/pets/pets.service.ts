import { Injectable, NotFoundException } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { CreatePetDto, UpdatePetDto } from './dto/create-pet.dto';
import { Pet } from './entities/pet.entity';


@Injectable()
export class PetsService {
    pets: Pet[] = [];

    insertPet(pet: CreatePetDto): Pet{
        // const id = this.pets.length;
        const id = nanoid();

        if(!pet.name || !pet.description || !pet.date_of_birth){
            throw new NotFoundException('All the required data was NOT provided!');
        }
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

    updateSignlePet(id: string, UpdatePetDto: UpdatePetDto): Pet{

        const index = this.pets.findIndex(s => s.pet_id == id);
        if(index < 0){
            throw new NotFoundException('Could not find matching ID');
        }
        this.pets[index] = {...this.pets[index], ...UpdatePetDto};
        return this.pets[index];
    }


    deletePet(id: string): Pet[] {
        const data = this.pets.filter(s => s.pet_id != id)
        this.pets = data
        return [...this.pets];
    }
}