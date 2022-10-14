import React from 'react';
import { PickerProps, PickerPopupActions, PickerColumnOption } from './PropsType';
declare function PopupPicker<T = PickerColumnOption>(props: PickerProps<T>, ref: React.ForwardedRef<PickerPopupActions & Partial<PickerPopupActions>>): JSX.Element;
declare const Picker: <T>(props: PickerProps<T> & {
    ref?: React.ForwardedRef<Partial<PickerPopupActions>>;
}) => ReturnType<typeof PopupPicker>;
export default Picker;
