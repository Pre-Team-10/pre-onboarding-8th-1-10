import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showToast = () => {
  toast('Toast Example');
};

export const showSuccessToast = (successMsg) => {
  toast.success(`${successMsg}`, {
    autoClose: true,
  });
};

export const showWarningToast = (warningMsg) => {
  toast.warning(`${warningMsg}`, {
    autoClose: true,
  });
};
export const showErrorToast = (errorMsg) => {
  toast.error(`${errorMsg}`, {
    autoClose: true,
  });
};
