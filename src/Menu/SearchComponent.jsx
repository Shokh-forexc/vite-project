import React, { useState, useEffect } from "react";
import "../Foods/Food.css"
import Swal from "sweetalert2";
const SearchComponent = ({ data }) => {

    const Alert = () => {
        Swal.fire({
            title: "successfully added to FAVOURITES",
            icon: "success",
            draggable: true
        });
    }

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(data);
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchTerm === "") {
                setFilteredData(data);
            } else {
                const results = data.filter((item) =>
                    item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredData(results);
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, data]);

    return (
        <div>
            <input
                type="text"
                placeholder="Qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    marginLeft: "3%",
                    padding: "10px",
                    width: "300px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    marginBottom: "20px",
                }}
            />

            <ul>
                {filteredData.length > 0 ? (
                    <div className={"mt-3 Four"}>
                        {filteredData.map((item) => (
                            <div className="car food" key={item.id}>
                                <div className="imageBox">
                                    <img src={item.img} alt=""/>
                                    <button><i className={"bi bi-heart"}></i></button>
                                </div>
                                <h3>{item.name}</h3>
                                <h5>{item.about}</h5>
                                <div className="twiceDiv">
                                    <button className={"icons"}>{item.icon}</button>
                                    <button onClick={Alert}>{item.buy} <i style={{color: 'orange', fontSize: '15px'}} className={"bi bi-currency-dollar"}></i></button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No results found</p>
                )}
            </ul>
        </div>
    );
};

export default SearchComponent;
