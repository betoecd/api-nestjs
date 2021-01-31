import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/models/product.model';
import { Repository } from 'typeorm';

@Controller('products')
export class ProductController {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}

  @Get()
  index() {
    return this.productRepo.find();
  }

  @Post()
  store(@Body() body) {
    const product = this.productRepo.create(body);
    return this.productRepo.save(product);
  }
}
