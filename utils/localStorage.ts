// const storage = window ? window.localStorage: null;
const tokenKey = 'webapp-tk'

export function setToken(data: string) {
  const storage = localStorage;
  if(storage) {
    storage.setItem(btoa(tokenKey), btoa(data))
  }
}

export function getToken(): string {
  let data = '';
  const storage = localStorage;
  if(storage) {
    const tokenData = storage.getItem(btoa(tokenKey))
    if(tokenData) {
      data = atob(tokenData) 
    }
  }
  return data;
}