import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);

    try {
      return await this.categoryRepository.save(category);
    } catch (error) {
      throw new BadRequestException('hubo un error');
    }
  }

  async findAll() {
    const categories = await this.categoryRepository.find({
      order: { name: 'ASC' },
      withDeleted: true,
    });
    return categories;
  }

  async findOne(id: number) {
    try {
      const category = await this.categoryRepository.findOne({ where: { id } });
      if (!category) throw new NotFoundException(`El ${id} no existe`);
      return category;
    } catch (error) {
      throw new BadRequestException('hubo un error');
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      const category = await this.categoryRepository.preload({
        id,
        ...updateCategoryDto,
      });
      if (!category) throw new NotFoundException(`El ${id} no existe`);
      return await this.categoryRepository.save(category);
    } catch (error) {
      throw new BadRequestException('hubo un error');
    }
  }

  async remove(id: number) {
    try {
      const result = await this.categoryRepository.softDelete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`El account con id ${id} no existe`);
      }
    } catch (error) {
      throw new BadRequestException('hubo un error');
    }
  }
}
