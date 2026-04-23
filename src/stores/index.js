import useTimePickerStore from "./useTimePickerStore";
import useToastr from "./useToastr";

const addToast = (...args) => useToastr.getState().addToast(...args);

export { useTimePickerStore, useToastr, addToast };
