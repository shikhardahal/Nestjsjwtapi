import{Controller, Post} from '@nestjs/common";
import { AuthService } from './auth.service';
import { AuthDto } from "./auth.dto";

@Controller('auth')
export class AuthCotroller{
    constructor(private authService:AuthService)

    @Post('local/signin')
    signinLocal(@Body() dto: AuthDto){
        return this.authService.signinLocal(dto);
    }
    @Post('local/signup')
    signupLocal(){
        return this.authservice.signupLocal();
    }
}

