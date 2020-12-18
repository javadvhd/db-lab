import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BooksService) { }

    @Post("book")
    postBook(@Body() bookdetails: CreateBookDto) {
        return this.bookService.insert(bookdetails)
    }

    //'getBooks()' return all the books which are associated with the user 
    // provided through 'userID' by the request  
    @Get('books')
    getBooks() {
        return this.bookService.getAllBooks();
    }
}
