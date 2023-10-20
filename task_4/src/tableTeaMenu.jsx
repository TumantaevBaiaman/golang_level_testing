import React from "react";

const TeaMenu = () => {
    return (
        <div>
            <h2>Tea Menu</h2>
            <table className="tea-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Manufacturer</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Green Tea</td>
                    <td>Green</td>
                    <td>Tea Company A</td>
                </tr>
                <tr>
                    <td>Black Tea</td>
                    <td>Black</td>
                    <td>Tea Company B</td>
                </tr>
                <tr>
                    <td>Herbal Tea</td>
                    <td>Herbal</td>
                    <td>Tea Company C</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TeaMenu;