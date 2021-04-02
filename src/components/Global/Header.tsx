import Style from '@styles/Global.Header.module.css'
import { MetaData } from '@src/config'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={Style.Header}>
            <h1><Link href="/">{MetaData.Title}</Link></h1>
        </header>
    )
}