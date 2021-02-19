import React, { useEffect, createRef } from "react"
import { connect } from "react-redux";

const Items = ({foods, category, addFoodToCard}) => {
    const gridItems = createRef()

    useEffect(() => {
        setScrollContainer()
        document.addEventListener('click', setScrollContainer)
    }, []) 

    const setScrollContainer = (desktop = true) => {
        let container = gridItems.current
        if (container) {
            const generatedGrid = () => {
            let items = container.getElementsByClassName('food')
            let itemsLength = items.length
            let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1

            const getWidth = () => {
                let n = bp + (itemsLength > bp ? 0.3 : 0)
                return (itemsLength / n) * 100
            }
            return `
                    display: grid;
                    grid-template-columns: repeat(${itemsLength}, 225px);
                    grid-gap: 1rem;
                    width : ${getWidth()}%;
                    `
            }
            let styles = !desktop && window.matchMedia("(min-width: 1024px)").matches ? `display: grid; grid-row-gap: 1rem;` : generatedGrid()
            container.setAttribute('style', styles)
        }
    }
    
    return (
        <section>
            <h2>{category}</h2>
            <div className="container-food">
                <div ref={gridItems} onClick={() => setScrollContainer.bind(this)}>
                    {
                        foods.map(food =>(
                            <article key={food.id} className="food">
                                <img src={food.photo} alt={food.name} />
                                <h3>{food.name}</h3>
                                <h3>prepare: {food.time} minutes</h3>
                                <button onClick={() => addFoodToCard(food)} className="btn btn-blue">
                                    Add
                                </button>
                            </article>        
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state =>({
    foods : state.foods
})

const mapDispatchToProps = dispatch =>({
    addFoodToCard(food){
        dispatch({
            type: "ADD_FOOD",
            food
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Items)