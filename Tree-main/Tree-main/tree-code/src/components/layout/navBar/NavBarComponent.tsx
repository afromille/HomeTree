import styles from './NavBarComponent.module.css';

function NavBar() {
   return (
        <header className={styles.navBar}>
            <h3>Tree</h3>
            <div className={styles.navLinks}>
                <nav>
                    <a href="#home">Home</a>
                    <a href="https://youtu.be/QNYT9wVwQ8A?si=IoNKFFXeBWViSClQ">Ranking</a>
                    <a href="#sobre"> Sobre</a>
                </nav>
            </div>
            <div>
                <button>Torne-se Tree</button>
            </div>
        </header>
    )
}

export default NavBar;