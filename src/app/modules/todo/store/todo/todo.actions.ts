import {Action} from "@ngrx/store";

export enum todoActionsType {
  create = '[TODO] create item',
  delete = '[TODO] delete item',
}

export class TodoCreateAction implements Action {
  readonly type = todoActionsType.create
  constructor(public payload: {name: string}) {}
}

export class TodoDeleteAction implements Action {
  readonly type = todoActionsType.delete
  constructor(public payload: {id: number}) {}
}

export type TodoActions = TodoCreateAction | TodoDeleteAction
