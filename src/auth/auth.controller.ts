import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('vk')
  @UseGuards(AuthGuard('vk'))
  login() {
    return {};
  }

  @Get('vk/callback')
  async callback() {
    return { message: 'Successfully logged in!' };
  }
}