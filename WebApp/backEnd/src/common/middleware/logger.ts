import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const time = new Date();
    console.log('LOG:', time, req.body);
    next();
  }
}
