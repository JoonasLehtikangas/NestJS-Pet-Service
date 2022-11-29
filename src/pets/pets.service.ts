import { Injectable, NotFoundException } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { CreatePetDto, UpdatePetDto } from './dto/create-pet.dto';
import { Pet } from './entities/pet.entity';


@Injectable()
export class PetsService {
    pets: Pet[] = [];

    // Serves POST request and adds new pet to the array of pets
    insertPet(pet: CreatePetDto): Pet{
        const id = nanoid();

        if(!pet.name || !pet.description || !pet.date_of_birth){
            throw new NotFoundException('All the required data was NOT provided!');
        }
        const new_pet = new Pet(id, pet.name, pet.description, pet.date_of_birth);
        this.pets.push(new_pet);
        return new_pet;
    }

    // Serves GET request and returns all the pets of the array
    getPets(): Pet[] {
        return [...this.pets];
    }

    // Serves GET request with ID and returns only one pet from the array
    getSinglePet(id: string): Pet {
        const idx = this.pets.findIndex((s) => s.id == id);
        if(idx < 0){
            throw new NotFoundException('Could not find matching ID');
        }
        return {...this.pets[idx]}
    }

    // Serves PATCH request with ID and updates data of desired pet
    updateSignlePet(id: string, UpdatePetDto: UpdatePetDto): Pet{

        const index = this.pets.findIndex(s => s.id == id);
        if(index < 0){
            throw new NotFoundException('Could not find matching ID');
        }
        this.pets[index] = {...this.pets[index], ...UpdatePetDto};
        return this.pets[index];
    }

    // Serves DELETE request with ID and deletes desired pet
    // and returns the value of the deleted pet
    deletePet(id: string): Pet {
        const index = this.pets.findIndex(s => s.id == id);
        if(index < 0){
            throw new NotFoundException('Could not find matching ID');
        }
        const deletedPet : Pet = this.pets[index]

        const data = this.pets.filter(s => s.id != id)
        this.pets = data
        
        return deletedPet;
    }
}