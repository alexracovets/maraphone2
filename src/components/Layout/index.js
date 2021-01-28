import s from './style.module.css';


const Layout = ({ id, title, descr, urlBg, colorBg }) => {

    return (
        <div className={s.root} id={id} style={{ backgroundImage: urlBg }, { backgroundColor: colorBg }}>

            <h2 className={s.h2}>{title}</h2>
            <img src={urlBg} className={s.layout_img} />
            <p className={s.layout_text}>{descr}</p>

        </div>
    )

}

export default Layout;