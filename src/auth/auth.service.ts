import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-vkontakte';

@Injectable()
export class AuthService extends PassportStrategy(Strategy, 'vk') {
    constructor() {
        super({
            clientID: '52663091',              // твой ID приложения ВКонтакте
            clientSecret: '4jbm07n4c05AXETuUfXN',      // секрет твоего приложения
            callbackURL: 'https://davalka0311.onrender.com/auth/vk/callback',                // обратный адрес
            scope: ['email'],                        // запрашиваем доступ к email
        });
    }

    async validate(accessToken, refreshToken, profile, done) {
        done(null, profile);
        return profile;
    }
}