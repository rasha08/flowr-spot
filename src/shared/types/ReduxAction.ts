export type ReduxAction<ActionType, ActionPayload> = {
  type: ActionType;
  payload: ActionPayload;
};
