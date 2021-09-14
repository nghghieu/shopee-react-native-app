export const checkRequired = (value: any) => {
  let alert;

  if (!value || !value.trim()) {
    alert = 'Không được để trống';
  }

  return alert;
};

export const checkSpecialKey = (value: any) => {
  let alert;

  const isSpecialKey = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g;
  if (isSpecialKey.test(value)) {
    alert = 'Không thể nhập ký tự đặt biệt';
  }

  return alert;
};

export const checkEmail = (value: any) => {
  let alert;

  // eslint-disable-next-line no-useless-escape
  const regexCheckEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (value && !regexCheckEmail.test(value)) {
    alert = 'Email không hợp lệ';
  }

  return alert;
};

export const checkPasswordLength = (value: any) => {
  let alert;

  if (value.trim().length < 6) {
    alert = 'Mật khẩu ít nhất 6 ký tự';
  }

  return alert;
};

export const checkConfirmPassword = (value: any, password: any) => {
  let alert;

  if (!value || !value.trim()) {
    alert = 'Hãy nhập lại mật khẩu';
  } else if (value !== password) {
    alert = 'Mật khẩu không giống';
  }

  return alert;
};
