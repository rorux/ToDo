import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { ObjectType, Field, ID, InputType } from "@nestjs/graphql";

export type TaskDocument = Task & mongoose.Document;

@Schema()
@ObjectType()
export class Task {
  @Field(() => ID)
  _id: number;

  @Prop({ required: true })
  @Field()
  name: string;

  @Prop({ required: true })
  @Field()
  complete: boolean;

  @Prop({ default: () => new Date() })
  @Field({ nullable: true })
  createdAt: Date;

  @Prop({ default: null })
  @Field({ nullable: true })
  updatedAt: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);

@InputType()
export class CreateTaskInput {
  @Field()
  name: string;

  @Field()
  complete: boolean;
}

@InputType()
export class UpdateTaskInput {
  @Field(() => ID)
  _id: number;

  @Field()
  name: string;

  @Field()
  complete: boolean;
}

@InputType()
export class FindTaskInput {
  @Field()
  _id: string;
}

@InputType()
export class DeleteTaskInput {
  @Field()
  _id: string;
}
