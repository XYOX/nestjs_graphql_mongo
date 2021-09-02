import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Characteristics')
@InputType('CharacteristicsInput')
class Characteristics {
  @Field()
  lifespan: string;

  @Field()
  size: 'small' | 'medium' | 'large';

  @Field()
  coat: 'short' | 'medium' | 'long';

  @Field()
  color: string;
}

@ObjectType()
export class CatType {
  @Field(() => ID)
  id: string;

  @Field()
  breed: string;

  @Field()
  characteristics: Characteristics;

  @Field()
  created: Date;

  @Field()
  updated: Date;
}

@InputType()
export class CatInputType {
  @Field()
  breed: string;

  @Field()
  characteristics: Characteristics;
}

// @ObjectType()
// export class CatType {
//   @Field(() => ID)
//   id: string;
//   @Field()
//   readonly name: string;
//   @Field(() => Int)
//   readonly age: number;
//   @Field()
//   readonly breed: string;
// }

// import { ObjectType, Field, InputType } from "@nestjs/graphql";
