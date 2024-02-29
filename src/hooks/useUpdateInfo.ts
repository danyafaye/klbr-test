import {useEffect, useState} from "react";

type ArrayType = {
    id: number;
    name: string;
    surname: string;
}

type ReturnType = {
    array: ArrayType[]
    page: number
    incrementPage: () => void;
}

export const useUpdateInfo = (): ReturnType => {
    const [page, setPage] = useState<number>(1);
    const [defaultArray] = useState<ArrayType[]>(Array.from(Array(100), (_, index) => {
        return {
            id: index,
            name: `John ${index + 1}`,
            surname: `Doe ${index + 1}`,
        }
    }));

    const [array, setArray] = useState<ArrayType[]>([]);

    const newArray = defaultArray.slice(defaultArray.length * (page / 5) - 20, defaultArray.length * (page / 5))

    const incrementPage = () => {
        if(page <= 5 && array.length < defaultArray.length){
            page !== 5 && setPage(page + 1);
            setArray([...array, ...newArray]);
        }
    }

    useEffect(() => {
        setArray(newArray)
        setPage(page + 1)
    }, []);

    return {
        array,
        page,
        incrementPage,
    }
}