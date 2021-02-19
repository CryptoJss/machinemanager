import React from "react";
import { connect } from "react-redux";


const CardList = ({ orders }) => (
    <section>
        <div>
            <h2>Order lists</h2>
            <div>
                {
                    orders.map(order => (
                        <article className="max-w-sm rounded overflow-hidden shadow-lg" key={order.id}>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Order #{order.id}</div>
                                <div className="text-sm lg:flex-grow">
                                    {
                                        order.foods.map( Items => (
                                            <span 
                                                key={Items.id} 
                                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                            >
                                                #{Items.name}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                {
                                    order.foods.reduce( (acc, value) =>  (
                                        <span 
                                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                        >
                                            prepare: { acc.time + value.time } minutes
                                        </span>
                                    ))
                                }
                            </div>
                        </article>
                    ))
                }
            </div>
        </div>
    </section>
)

const mapStateToProps = state =>({
    orders : state.orders
})

const mapDispatchToProps = dispatch =>({})

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
