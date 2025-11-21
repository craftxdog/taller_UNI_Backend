import { ApiProperty } from '@nestjs/swagger';

export class ProductEntity {
  @ApiProperty({
    description: 'UUID del producto',
    example: '5b1b7c7c-1e3f-4e8d-9af3-2ad0b4997e2b',
  })
  id: string;

  @ApiProperty({
    description: 'Nombre del producto',
    example: 'Laptop ThinkPad X1 Carbon',
  })
  nombre: string;

  @ApiProperty({
    description: 'Costo de adquisición del producto',
    example: 850.5,
  })
  costo: number;

  @ApiProperty({
    description: 'Precio de venta del producto',
    example: 1200.99,
  })
  precio: number;

  @ApiProperty({
    description: 'Cantidad en inventario',
    example: 50,
  })
  stock: number;

  @ApiProperty({
    description: 'Estado del producto',
    example: true,
  })
  status: boolean;

  @ApiProperty({
    description: 'Fecha de creación',
    example: '2025-01-15T12:34:56.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Fecha de última actualización',
    example: '2025-01-20T18:12:00.000Z',
  })
  updatedAt: Date;
}
