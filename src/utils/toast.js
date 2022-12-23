import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastConfigObj = {
  autoClose: true,
};

export const showToast = () => {
  toast('Toast Example');
};

export const showSuccessToast = (successMsg) => {
  toast.success(`${successMsg}`, toastConfigObj);
};

export const showWarningToast = (warningMsg) => {
  toast.warning(`${warningMsg}`, toastConfigObj);
};

export const showErrorToast = (errorMsg) => {
  toast.error(`${errorMsg}`, toastConfigObj);
};
