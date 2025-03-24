import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ZodError } from 'zod';

@Catch(ZodError)
export class filter implements filter {
  catch(exception: ZodError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const errors = exception.errors.map(err => ({
      path: err.path.join('.'),
      message: err.message,
    }));

    response.status(HttpStatus.BAD_REQUEST).json({
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Validation failed',
      errors,
    });
  }
}