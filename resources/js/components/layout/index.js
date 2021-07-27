import React from 'react';
import './styles.css'
import Header from '../header'
import { DishCardList } from '../dishcardlist';
import { Dish } from '../dish';

const Layout = () => {

    const [dishes, setDishes] = useState([])

    const getDishes = () =>
        window.axios.get('/full-dishes')
            .then(json => setDishes(json.data.data))

    useEffect(() => {
        getDishes()
    }, [])

    const dishId = useParams()

    return (
        <>
            <Header />
            <main className='layout-content'>
                { dishId == undefined ? <DishCardList  /> : <Dish /> }
            </main>
        </>)
}

export default Layout