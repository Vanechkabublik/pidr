import { Controller, Get, UseGuards, Request, Response } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('vk')
  @UseGuards(AuthGuard('vk'))
  login() {
    return {};
  }

  @Get('vk/callback')
  @UseGuards(AuthGuard('vk')) // Используем тот же гард для обработки обратного вызова
  async callback(@Request() req, @Response() res) {
    const user = req.user; // Профиль пользователя доступен тут
    if (!user) {
      return res.status(401).send({ error: 'Authentication failed' });
    }

    console.log(user); // Здесь будут видны полученные данные
    return res.send({ message: 'Successfully logged in!', data: user });
  }
}