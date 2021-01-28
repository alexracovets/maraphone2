
import s from './style.module.css';


const Header = ({ title, descr }) => {
    return (
        <div className={s.root}>
            <div className={s.conteiner}>
                <h1 className={s.header}>{title}</h1>
                <p className={s.paragraph}>{descr}</p>
            </div>
        </div>
    )

}

export default Header;