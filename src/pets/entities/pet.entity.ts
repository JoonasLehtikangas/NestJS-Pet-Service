import { ApiProperty } from "@nestjs/swagger";

export class Pet {
    @ApiProperty()
    pet_id: string;
    
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    date_of_birth: string;

    constructor(pet_id: string, name: string, description: string, date_of_birth: string) {
            this.pet_id = pet_id,
            this.name = name,
            this.description = description,
            this.date_of_birth = date_of_birth
    }
}