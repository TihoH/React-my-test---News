import { useEffect, useState } from "react";

export  function useDebounce(value , deley){
    const [debauncedValue , setDebaundecValue] = useState(value)

    useEffect( () => {
        const handler = setTimeout( () => {
            setDebaundecValue(value)
        } , deley);

        return () => {
            clearTimeout(handler)
        }
    } , [value , deley] )

    return debauncedValue
}
