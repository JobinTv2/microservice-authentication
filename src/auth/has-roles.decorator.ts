import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/user/dto/user-role-dto';

export const HasRoles = (roles: Role) => SetMetadata('roles', roles);
