import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatService } from './cat.service';
import { CatInputType, CatType } from './dto/cat.dto';

@Resolver()
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Query(() => String)
  async hello() {
    return '👋';
  }

  @Query(() => [CatType])
  async cats() {
    return this.catService.findAll();
  }

  // @Query(() => CatType)
  // async cat(@Args('id') id: string) {
  //   return this.catService.findAll();
  // }

  @Mutation(() => CatType)
  async createCat(@Args('input') input: CatInputType) {
    return this.catService.create(input);
  }

  @Mutation(() => CatType)
  async updateCat(@Args('id') id: string, @Args('input') input: CatInputType) {
    return this.catService.update(id, input);
  }

  @Mutation(() => CatType)
  async deleteCat(@Args('id') id: string) {
    return this.catService.delete(id);
  }
}
