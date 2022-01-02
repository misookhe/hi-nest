import { Controller, Delete, Get, Param, Patch, Post, Body, Query} from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all movies";
    }

    @Get("/search")
    search(@Query('year') searchingYear: string){
        return `WE are searching for a movie with a title: ${searchingYear}`
    }

    @Get("/:id")
    getOne(@Param('id') movieId: string){
        return `This will return one movie ${movieId}`;
    }
    
    @Post()
    create(@Body() movieData){
        console.log(movieData);
        return movieData;
    }

    @Delete("/:id")
    remove(@Param("id") movieId: string){
        return "thiw delete";
    }
    
    @Patch("/:id")
    path(@Param('id') movieId: string, @Body() updateData){
        return{
            updatedMovie: movieId,
            updateData,
        };
    }

}
