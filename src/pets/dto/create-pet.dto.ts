import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CreatePetDto {
        @ApiProperty({ example: "Kitty", description: "Name of the Pet"})
        @IsNotEmpty()
        @IsString()
        name?: string;
        
        @ApiProperty({ example: "Big angry cat", description: "Characteristics of the Pet"})
        @IsString()
        @IsNotEmpty()
        @Length(10,200)
        description?: string;

        @ApiProperty({ example: "30-04-2001"})
        @IsNotEmpty()
        @IsString()
        date_of_birth?: string;
}

export class UpdatePetDto {
        @ApiProperty({ example: "Kitty", description: "Name of the Pet"})
        @IsOptional()
        @IsNotEmpty()
        @IsString()
        name?: string;
        
        @ApiProperty({ example: "Big angry cat", description: "Characteristics of the Pet"})
        @IsOptional()
        @IsString()
        @IsNotEmpty()
        @Length(10,200)
        description?: string;

        @ApiProperty({ example: "30-04-2001"})
        @IsOptional()
        @IsNotEmpty()
        @IsString()
        date_of_birth?: string;
}