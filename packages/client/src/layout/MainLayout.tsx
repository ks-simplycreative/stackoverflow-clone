export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="app">
            <header>
                <a className="link" href="/">
                    Stackunderflow
                </a>
            </header>
            <main>
                {children}
            </main>
            <footer>
                &copy; 2023 Stackunderflow
            </footer>
        </div>
    )
}