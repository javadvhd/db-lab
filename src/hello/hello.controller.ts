import { Body, Controller, Get, Header, Post, Query } from '@nestjs/common';
import { HelloService } from './hello.service';
import { PersonDto } from './dto/person.dto';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
@Controller('hello')
export class HelloController {
    constructor(private readonly helloService: HelloService) { }

    @ApiResponse({ status: 200, description: "Say Hello !!!" })
    @Post('welcome')
    @Header('Content-Type', 'application/json')
    async sayWelcome(@Body() personDto: PersonDto): Promise<{ data: string }> {
        console.log("input person ", personDto)

        let msg = await this.helloService.welcome(personDto)
        return { data: msg }
    }

    @ApiResponse({ status: 200 })
    @ApiQuery({
        name: 'name',
        required: true,
        type: String
    })

    @ApiQuery({
        name: 'year',
        required: false,
        type: Number,
        description: `you can ignore this`
    })

    @Get('welcome')
    async sayWelcome2(@Query('name') iName, @Query('year') iYear):
        Promise<{ data: string }> {
        let msg = await this.helloService.welcome({ name: iName, year: iYear });
        return { data: msg }
    }
}
