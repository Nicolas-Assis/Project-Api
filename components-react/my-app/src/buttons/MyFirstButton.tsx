

function MyButton() {
    return (
        <button className="my-button">Eu sou um botão</button> 
    );
}


export default function MyApp() {
    return (
        <div>
            <h1>Clique no botão abaixo</h1>
            <MyButton />
        </div>
    );
}