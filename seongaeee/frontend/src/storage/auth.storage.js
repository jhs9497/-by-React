import React from 'react'

export const login_success_storage = (token, userinfo) => {
  localStorage.setItem("accessToken", token);
  localStorage.setItem("userinfo", userinfo);
  localStorage.setItem("isLoggedIn", "true");
}
export const login_fail_storage = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userinfo");
  localStorage.setItem("isLoggedIn", "false");
}
export const logout_storage = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userinfo");
  localStorage.setItem("isLoggedIn", "false");
}
export const signup_storage = (token, userinfo) => {
  localStorage.setItem("accessToken", token);
  localStorage.setItem("userinfo", userinfo);
  localStorage.setItem("isLoggedIn", "true");
}