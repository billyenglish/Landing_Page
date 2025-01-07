const Nav = () => {
    return (
        <header>
            <nav>
                <div>
                    <h1 id="logo">Billy E.</h1>
                </div>

                <div>
                    <ul className="nav-list">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">About</li>
                        <li className="nav-item">Project</li>
                        <li className="nav-item">Skills</li>
                        <li className="nav-item">Contact Me</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Nav;