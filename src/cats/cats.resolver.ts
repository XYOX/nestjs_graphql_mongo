import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CatsResolver {
  // constructor(
  //   private authorsService: AuthorsService,
  //   private postsService: PostsService,
  // ) {}

  @Query(() => String)
  async hello() {
    return 'hola';
  }

  // @ResolveField()
  // async posts(@Parent() author: Author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}
