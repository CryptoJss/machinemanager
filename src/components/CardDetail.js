import React from "react";
import { connect } from "react-redux";

const CardDetail = ({ card, removeFood, saveOrder }) => (
    <section>
        <div>
            <h2>Order detail</h2>
            <div className="detail">
                {
                    card.map( Items => (
                        <article key={Items.id}>
                            <div>
                                <img src={Items.photo} alt={Items.name} />
                                <button onClick={ () => removeFood(Items)} className="button">
                                    X
                                </button>
                            </div>
                            <p>{Items.name}</p>
                        </article>       
                    ))
                }
                {
                    card.length > 0 
                    ? <div>
                        <button onClick={() => saveOrder(card)} className="btn btn-blue">
                            Save
                        </button>
                    </div> 
                    : <div />
                }
            </div>
        </div>
    </section>
)

const mapStateToProps = state =>({
    card : state.card
})

const mapDispatchToProps = dispatch =>({
    removeFood(food)
    {
        dispatch({
            type: "REMOVE_FOOD",
            food
        })
    },
    saveOrder(card)
    {
        dispatch({
            type: "SAVE_ORDER",
            card
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDetail)