import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, Length } from "class-validator";

// DTO to be used for POST requst, all the fields must be fullfilled properly
export class CreatePetDto {
        @ApiProperty({ example: "Kitty", description: "Name of the Pet"})
        @IsString()
        name?: string;
        
        @ApiProperty({ example: "Big angry cat", description: "Characteristics of the Pet"})
        @IsString()
        @Length(10,200)
        description?: string;

        @ApiProperty({ example: "30-04-2001"})
        @IsString()
        date_of_birth?: string;
}

// DTO to be used for PATCH requst, allows fields to be empty
export class UpdatePetDto {
        @ApiProperty({ example: "Kitty", description: "Name of the Pet"})
        @IsOptional()
        @IsString()
        name?: string;
        
        @ApiProperty({ example: "Big angry cat", description: "Characteristics of the Pet"})
        @IsOptional()
        @IsString()
        @Length(10,200)
        description?: string;

        @ApiProperty({ example: "30-04-2001"})
        @IsOptional()
        @IsString()
        date_of_birth?: string;
}