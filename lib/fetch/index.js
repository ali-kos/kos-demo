import axios from 'axios';
import { notification } from 'antd';

export default async (option) => {
  const request = await axios({
    baseURL: 'http://mypage.dockerlab.alipay.net/api/',
    // baseURL: 'http://mypage.dockerlab.alipay.net/api/',
    method: 'POST',
    ...option,
    headers: {
      'Content-Type': 'application/json',
      ...option.headers
    },
    data: JSON.stringify(option.data),
    proxy: {
      host: 'mypage.dockerlab.alipay.net',
      port: 8888,
      auth: {
        username: 'mikeymike',
        password: 'rapunz3l'
      }
    }
  });

  const { data } = request;

  if (!data || !data.ok) {
    notification.error({
      description: data.errorMsg,
      message: '抱歉！'
    });
  }

  return data;
}
