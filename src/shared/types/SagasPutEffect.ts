import { Action } from 'redux';
import { PutEffect } from 'redux-saga/effects';

export type SagasPutEffect = <ActionUnion>(action: ActionUnion & Action) => PutEffect<ActionUnion & Action>;
