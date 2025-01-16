import { PrismaClient } from '@prisma/client';
import datasource from './datasource';

const prisma = new PrismaClient({  datasources: datasource });