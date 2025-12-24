import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  async create(createAccountDto: CreateAccountDto) {
     const account = this.accountRepository.create(createAccountDto);
    
    try {

      return await this.accountRepository.save(account);
    } catch (error) {
      throw new BadRequestException("hubo un error")
    }
    
  }

  async findAll() {
    const accounts = await this.accountRepository.find(
      {
        order: { name: 'ASC' },
        withDeleted:true
      }
    )
    return accounts;
  }

  async findOne(id: number) {
     try {
       const account = await this.accountRepository.findOne({ where: { id } });
       if (!account) throw new NotFoundException(`El ${id} no existe`);
       return account;
     } catch (error) {
       throw new BadRequestException("hubo un error")
     }
    
  }

  async update(id: number, updateAccountDto: UpdateAccountDto) {
    try {
      const account = await this.accountRepository.preload({ id, ...updateAccountDto })
      if (!account) throw new NotFoundException(`El ${id} no existe`);
      return await this.accountRepository.save(account);
    } catch (error) {
      throw new BadRequestException('hubo un error');
    }
    
  }

  async remove(id: number) {
    try {
    const result = await this.accountRepository.softDelete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`El account con id ${id} no existe`);
    }
    } catch (error) {
      throw new BadRequestException('hubo un error');
    }
  }
}
