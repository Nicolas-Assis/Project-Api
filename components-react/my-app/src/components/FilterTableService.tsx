import { useState } from "react";
import ServiceTable from "./ServiceTable";
import SearchBar from "./SearchBar";
import Services from "../data/ListaServices";
import '../style/Table.css';


export default function FilterableServiceTable() {
    const [filterText, setFilterText] = useState("");

    return (
        <div className="filterable-service-table">
            <SearchBar
                filterText={filterText}
                onFilterTextChange={setFilterText}
            />
            <ServiceTable
                services={Services}
                filterText={filterText}
            />
        </div>
    );
}