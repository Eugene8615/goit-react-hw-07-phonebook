import { useDispatch } from "react-redux";
import { filterQuery } from 'redux/filterSlice';
import styles from './Filter.module.css' 

function Filter() {

    const dispatch = useDispatch()

    const handleGeyValue = (e) => {
        dispatch(filterQuery(e.currentTarget.value))
    }

  
    return <label className={styles.label}>
        <span className={styles.span}>Find contact by name</span>
        <input onChange={handleGeyValue} name="filter" type="text" className={styles.input}/>
    </label>

}

export default Filter;