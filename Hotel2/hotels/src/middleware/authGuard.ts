/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('Token lipsă.');
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = this.jwtService.verify(token); // Verifică token-ul
      request['user'] = decoded; // Adaugă utilizatorul la cerere
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token invalid.');
    }
  }
}
