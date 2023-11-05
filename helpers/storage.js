export const getAllValue = ()=>{
    let list = localStorage.getItem('allValue')
    list = list?JSON.parse(list):[]
    const user = list?.find(item=>item?.check)
    return user || null
}