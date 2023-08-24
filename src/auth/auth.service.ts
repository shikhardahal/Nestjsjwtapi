import { Injectable } from '@nestjs/common';
import users from '../users.json';
import { AuthDto } from './authdto';

@Injectable()
export class AuthService {
    signinLocal(dto: nAuthDto) {}
    const user =users.find(_user =>_user.email ===dot.email);
    if(!user) throw new UnauthorizedException('User');
    if (user.password !== dto.password) throw new UnauthorizedException('Creditental ');


    signupLocal(dto: AuthDto){}

}
