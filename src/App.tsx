import {FC, useEffect} from 'react'
import * as ST from './styles.ts'
import {Card} from "./components/Card/Card.tsx";
import {useInView} from "react-intersection-observer";
import {useUpdateInfo} from "./hooks/useUpdateInfo.ts";

const App: FC = () => {
    const { array, page, incrementPage } = useUpdateInfo();

    const { ref, inView } = useInView({
        threshold: 1,
    });

    const onClickHandler = () => {
        incrementPage();
    }

    useEffect(()=>{
        if(inView && page > 2){
            incrementPage();
        }
    },[inView])

    return (
        <ST.AppWrapper>
            <ST.CardsWrapper>
                {array.map(it => <Card forwardedRef={ref} key={it.id} cardName={it.name} cardSurname={it.surname}/>)}
            </ST.CardsWrapper>
            {page === 2 && <ST.Button onClick={onClickHandler}>Показать ещё</ST.Button>}
        </ST.AppWrapper>
    )
}

export {App}
