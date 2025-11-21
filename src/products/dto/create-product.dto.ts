import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'Nombre del producto',
    example: 'Mouse Gamer RGB',
  })
  nombre: string;

  @ApiProperty({
    description: 'Costo de adquisición',
    example: 15.5,
  })
  costo: number;

  @ApiProperty({
    description: 'Precio de venta',
    example: 25.99,
  })
  precio: number;

  @ApiProperty({
    description: 'Cantidad inicial en inventario',
    example: 100,
  })
  stock: number;

  @ApiProperty({
    description: 'Estado del producto',
    required: false,
    default: true,
    example: true,
  })
  status?: boolean;
}
