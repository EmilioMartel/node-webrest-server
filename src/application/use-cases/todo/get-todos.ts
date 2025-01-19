import { TodoEntity, TodoRepository } from "../../../domain";

export interface GetTodosUseCase {
  execute(): Promise<TodoEntity[]>;
}

export class GetTodos implements GetTodosUseCase {
  
  constructor(
    private readonly repository: TodoRepository
  ) {}

  execute(): Promise<TodoEntity[]> {
    return this.repository.getAll();
  }

}