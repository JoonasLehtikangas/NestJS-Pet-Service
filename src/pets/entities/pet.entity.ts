import { ApiProperty } from "@nestjs/swagger";

export class Pet {
    @ApiProperty({ example: "ekDDEq6UURBHk5s5MRgoQ", description: "ID of the Pet"})
    id: string;
    
    @ApiProperty({ example: "Kitty", description: "Name of the Pet"})
    name: string;

    @ApiProperty({ example: "Big angry cat", description: "Characteristics of the Pet"})
    description: string;

    @ApiProperty({ example: "30-04-2001"})
    date_of_birth: string;

    constructor(id: string, name: string, description: string, date_of_birth: string) {
            this.id = id,
            this.name = name,
            this.description = description,
            this.date_of_birth = date_of_birth
    }
}