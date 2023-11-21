import { useDispatch, useSelector } from 'react-redux';

import { update } from './requests/requests';

import { useEffect } from 'react';

import style from "./styles/orderKeeper.module.css"
import Table from './components/table';
import Info from './components/info';
import Menu from './components/menu';


const OrderKeeper = () =>{
    const dispatch = useDispatch();
    const tables = useSelector(state => state.tables.tables)
    const clicked = useSelector(state => state.tables.clicked)


    useEffect(()=>{
        const interval = setInterval(() => {
            update(dispatch);
          }, 1000);
          return () => clearInterval(interval);
    })

    let tablesTag = tables.map(function(element){
        return <Table key = {element.id} table = {element}/>
    })

    return(
            <div className={style.container}>
                <h2>Система управления заказами ресторана</h2>
                    <div className={style.content}>
                        <div className={style.table_container}>
                            {
                                clicked
                                    ?<Info/>
                                    :tablesTag
                            }
                        </div>
                        <div className={style.table_info}>
                        <Menu />
                        </div>
                    </div>
            </div>
        
    )
}

export default OrderKeeper;