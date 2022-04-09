import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import {
  Task,
  CreateTaskInput,
  UpdateTaskInput,
  FindTaskInput,
  DeleteTaskInput,
} from "./task.schema";
import { TaskService } from "./task.service";

@Resolver(() => Task)
export class TaskResolver {
  constructor(private taskService: TaskService) {}

  @Query(() => [Task])
  async tasks() {
    return this.taskService.findMany();
  }

  @Query(() => Task)
  async findTask(@Args("input") { _id }: FindTaskInput) {
    return this.taskService.findById(_id);
  }

  @Mutation(() => Task)
  async createTask(@Args("input") input: CreateTaskInput) {
    return this.taskService.createTask(input);
  }

  @Mutation(() => Task)
  async updateTask(@Args("input") input: UpdateTaskInput) {
    return this.taskService.updateTask(input);
  }

  @Query(() => Task)
  async deleteTask(@Args("input") { _id }: DeleteTaskInput) {
    return this.taskService.deleteById(_id);
  }
}
