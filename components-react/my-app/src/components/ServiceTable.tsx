import { JSX } from "react";

export default function ServiceTable({ services, filterText }: { services: any[]; filterText: string }) {
    const rows: JSX.Element[] = [];

    services.forEach((service) => {
        // Filtrar serviços com base no texto digitado
        if (service.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }

        // Adicionar o serviço à tabela
        rows.push(
            <tr key={service.name}>
                <td>{service.name}</td>
                <td>{service.category}</td>
                <td>{service.price}</td>
            </tr>
        );
    });

    return (
        <table>
         <thead>    
            <tr>
                <th>Nome</th>
                <th>Categoria</th> 
                <th>Preço</th>
            </tr>
        </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}