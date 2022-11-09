import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class CreatePetDto {
        @ApiProperty({ example: "Pluto", description: "Name of the Pet"})
        @IsString()
        name: string;
        
        @ApiProperty({ example: "Small friendly dog", description: "Characteristics of the Pet"})
        @IsString()
        @Length(5,20)
        description: string;

        @ApiProperty({ example: "01-01-2000"})
        @IsString()
        date_of_birth?: string;
}