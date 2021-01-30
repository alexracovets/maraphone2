import s from './style.module.css';

import layoutImage from "../../img/bg1.jpg"

const Layout = ({ id, title, descr, urlBg, colorBg, children}) => {

    const ifBackground = urlBg ? { backgroundImage: "url(" + layoutImage + ")" } : { backgroundColor: colorBg }

    return (
        <section className={s.root} id={id} style={ifBackground}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc}>
                        <span>{children}</span>
                    </div>

                </article>
            </div>

        </section>
    )

}



export default Layout;