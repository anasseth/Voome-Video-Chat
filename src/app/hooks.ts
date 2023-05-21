import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useSelector } from "react-redux";


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelecctor: TypedUseSelectorHook<RootState> = useSelector;