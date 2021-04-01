import Styles from '@styles/Global.Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={Styles.Footer}>
            <p>Made by <Link href="https://calpico.dev/">Calpico</Link></p>
        </footer>
    )
}