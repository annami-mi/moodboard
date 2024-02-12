// Get запрос
export const fetchGet = async (url:string) =>{
    let urlGet = new URL(url);

    // Object.entries(obj).forEach(([key, value]) => {
    //     if(value != null){
    //         urlGet.searchParams.append(key, value)
    //     }
    // });

    const request = {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'accept': 'application/json'
        }
    };

    let status, result
    try {
        const response = await fetch(urlGet, request);
        status = response.status;
        result = await response.json()
    } catch (e) {
        status = 500
        result = null
    }

    return {status, result}
}

// Проверка запроса на успешность
export const isStatusSuccess = (status:number) => {
    return status >= 200 && status <= 300
}

// Преобразование невалидного пустого ответа к null
export const normalizeResult = (result:any) => {
    let res
    if(result === null || result === undefined){
        res = null
    } else if (result.length < 1){
        res = null
    } else if(Object.keys(result).length < 1){
        res = null
    } else {
        res = result
    }
    return res
}

interface IResponse{
    result: any,
    status: number,
}
export const normalizeResponse = (response:IResponse) => {
    const status = isStatusSuccess(response.status) ? null : response.status
    const result = !status ? normalizeResult(response.result) : null
    return {status, result}
}