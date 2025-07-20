import React, { useEffect, useState } from "react";

export const UseRequest = (url, method='GET') => {

    const [data, setData] = useState({
        'data': null,
        'loading': true
    })

    useEffect(function() {
        req(url, method)
    }, [url, method])

    const req = (urlParam, methodParam) => {
        fetch(urlParam, { methodParam })
        .then(response => response.json())
        .then(
            object => {
                console.log(object)
                setData({
                    'data': object,
                    'loading': false
                })
            }
        )
        .catch((error) => console.log(error))
    
    }

    return data;

}