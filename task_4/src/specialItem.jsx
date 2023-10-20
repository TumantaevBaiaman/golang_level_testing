import React from "react"

const SpecialItem = () => {
    return (
        <div>
            <h2>Special Items</h2>
                <div className="special-items">
                    <div className="rounded-image">
                    <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" alt="Item 1" />
                    </div>
                    <div className="rounded-image">
                    <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg" alt="Item 2" />
                </div>
            </div>
        </div>
    )
}

export default SpecialItem;