
export enum ScreenSize {
    "xs" = 0,
    "sm" = 1,
    "md" = 2,
    "lg" = 3,
    "xl" = 4,
    "xxl" = 5
}

export const seeIfLogin = async (api, setToken, cb?: () => void) => {
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')
    if (email !== null && email !== '') {
        try {
            const body = await api.login({email: email, password: password})
            await setToken(body.data)
        } catch (err) {
            console.error(err)
        }
    } else {
        typeof cb === 'function' && cb()
    }
}

export const serialize = function(obj) {
    var str = [],
      p;
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        var k = p,
          v = obj[p];
        str.push((v !== null && typeof v === "object") ?
          serialize(v) :
          encodeURIComponent(k) + "=" + encodeURIComponent(v));
      }
    }
    return str.join("&");
}

export const resetSellingForm = () => {
  localStorage.setItem('game', '')
  localStorage.setItem('section', '')
  localStorage.setItem('price', '')
}

export const resetSellingIfUndefined = () => {
  if (localStorage.getItem('game') !== undefined && localStorage.getItem('game') !== '') {
    resetSellingForm()
  }
}