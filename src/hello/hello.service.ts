import { Injectable } from '@nestjs/common';
import { PersonDto } from './dto/person.dto';

@Injectable()
export class HelloService {
    async welcome(person: PersonDto): Promise<string> {
        let msg: string;
        // console.log("input person ", person)
        if (person.year) {
            let current_year = new Date().getFullYear();
            console.log(`Welcome ${person.name} - your birthday is ${person.year}`)
            msg = `Welcome ${person.name} - your birthday is ${person.year}`
        } else {
            console.log(`Welcome ${person.name} - your birthday is Undefined !!!`);
            msg = `Welcome ${person.name} - your birthday is Undefined !!!`
        }
        return msg;
    }
}
