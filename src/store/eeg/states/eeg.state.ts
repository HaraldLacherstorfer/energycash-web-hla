import {Eeg} from "../../../models/eeg.model";
import {createEntityAdapter, EntityState} from "@reduxjs/toolkit";


export const featureKey = 'eeg';

export interface EegState extends EntityState<Eeg, string> {
  isFetching: boolean;
  selectedTenant: string | null;
}

export const adapter = createEntityAdapter<Eeg, string>({
  selectId: (eeg) => eeg.rcNumber
});
// export const adapter = createEntityAdapter<Eeg>();

export const initialState: EegState = adapter.getInitialState({
  isFetching: false,
  selectedTenant: localStorage.getItem("tenant")
});