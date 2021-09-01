import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatService } from './cat.service';
import { CatType } from './dto/cat.dto';
import { CatInput } from './inputs/cat.input';

@Resolver()
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Query(() => String)
  async hello() {
    return 'hola';
  }

  @Query(() => [CatType])
  async cats() {
    return this.catService.findAll();
  }

  @Mutation(() => CatType)
  async createCat(@Args('input') input: CatInput) {
    return this.catService.create(input);
  }
}
