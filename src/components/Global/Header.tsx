import Style from '@styles/Global.Header.module.css'
import { MetaData } from '@src/config'

export default function Header() {
    return (
        <header className={Style.Header}>
            <h1>{MetaData.Title}</h1>
        </header>
    )
}