import '../../style/global.css';
import '../../style/nicolas.css';

export default function Suporte() {
   const user = {
    name: 'Nicolas Assis',
        imageUrl: 'https://avatars.githubusercontent.com/u/199611312?v=4',
        description: 'Desenvolvedor de software, apaixonado por tecnologia e inovação. Atualmente trabalhando com desenvolvimento de software e automação de testes.'
    };
    return (
        <div className="suporte">
            <h1>Bem vindo, a nossa central de atendimento!</h1>
            <p>
                Você será atendido pelo <b>{user.name}</b>!<br />
                <span>{user.description}</span>
            </p>
            <img className="nicolas" src={user.imageUrl} alt={`Foto de ${user.name}`} />
        </div>
    );
}