import { notification } from 'antd';

export const showAlert = (
  type: 'success' | 'error',
  msg: string
) => {
  notification[type]({
    message: msg,
    duration: 2,
  });
};