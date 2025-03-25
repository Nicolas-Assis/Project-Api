import styles from '../../../style/pessoasFisicas.module.css'

interface HeaderProps {
    mostrarFormulario: boolean;
    toggleFormulario: () => void;   
}

export default function Header({mostrarFormulario, toggleFormulario}: HeaderProps) {
    return (
        <div className={styles.header}>
            <h1 className= {styles.title}>Pessoas Físicas</h1>
            <button className={styles.button} onClick = {toggleFormulario}>
                {mostrarFormulario ? "Cancelar" : "→ Cadastrar  Pessoa Física ←"}
            </button>
        </div>
    )
}