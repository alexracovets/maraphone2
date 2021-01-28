import s from './style.module.css';


const Layout = ({ id, title, descr, urlBg, colorBg }) => {

    // const isBackImage = 
    return (
        <section className={s.root} id={id}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc, s.full}>
                        <p>{descr}</p>
                    </div>

                </article>
            </div>

        </section>
    )

}

export default Layout;