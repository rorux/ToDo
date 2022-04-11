import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import {
  Task,
  CreateTaskInput,
  UpdateTaskInput,
  TaskDocument,
} from "./Task.schema";

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private taskModel: mongoose.Model<TaskDocument>
  ) {}

  async findMany() {
    return await this.taskModel.find();
  }

  async findById(id: string) {
    return await this.taskModel.findById(id);
  }

  async createTask(task: CreateTaskInput) {
    return await this.taskModel.create(task);
  }

  async updateTask(task: UpdateTaskInput) {
    const findTask = await this.taskModel.findOne({ _id: task._id });
    findTask.name = task.name;
    findTask.complete = task.complete;
    findTask.updatedAt = new Date();
    return await this.taskModel.create(findTask);
  }

  async deleteById(id: string) {
    return await this.taskModel.findByIdAndRemove(id);
  }
}
