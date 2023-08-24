import { Injectable } from '@nestjs/common';
import users from '../users.json';
import {AutoDto}from './dto';
@Injectable()
export class AppService {
  