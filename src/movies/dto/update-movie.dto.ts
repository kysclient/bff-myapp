import { IsArray, IsNumber, IsString } from "class-validator";
import { PartialType } from "@nestjs/swagger";
import { CreateMovieDto } from "./create-movie.dto";


export class UpdateMovieDto extends PartialType(CreateMovieDto) {}