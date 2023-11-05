import {atom, selector} from 'recoil'

export const refreshState = atom({
    key: 'refreshState',
    default: false,
  });
  
export const tempCelsius = selector({
    key: 'tempCelsius',
    get: ({get}) => get(ceshi).toLocaleUpperCase(),

  });

export const mulUserInfo = atom({
    key:'mulUserInfo',
    default: [null,null,null],
})
