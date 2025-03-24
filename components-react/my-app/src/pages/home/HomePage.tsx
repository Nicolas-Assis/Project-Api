import FilterableServiceTable from "../../components/FilterTableService";
import "../../style/global.css";
import "../../style/home.css";

export default function HomePage() {
    return (
        <div className="home-container">
            <h1>Bem-vindo ao nosso site!</h1>

            <h2>↓↓↓De uma olha na nossa lista de serviços↓↓↓</h2>
            <FilterableServiceTable/>
        </div>
    );
}


