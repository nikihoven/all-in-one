import monster821 from '../images/monster821.jpg'
import monster1200 from '../images/monster1200.jpg'

import { Comparer } from '../components/comparer/comparer'

const ComparerPage = () => {

    return (
        <>
            <h1 className="layout__title">Image comparer</h1>
            <Comparer left={monster821} right={monster1200}/>
        </>
    )
}

export { ComparerPage }