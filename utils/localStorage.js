// const storage = window ? window.localStorage: null;
const tokenKey = 'webapp-tk'

export function setToken(data) {
  const storage = localStorage;
  if(storage) {
    storage.setItem(btoa(tokenKey), btoa(data))
  }
}

export function getToken() {
  let data = '';
  const storage = localStorage;
  if(storage) {
    data = atob(storage.getItem(btoa(tokenKey))) 
  }
  return data;
}