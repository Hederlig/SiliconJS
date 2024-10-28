export default function Header() {
    return (
        <div className="Header">
            <div class="container">
                <a class="logo" href="index.html"><img src="images/logo.svg" alt="Silicon Logotype"> </img></a>
                <nav class="navbar">
                    <a class="navlink" href="#">Features</a>
                </nav>
                <span class="lable">Darkmode</span>
                <div class="btn-toggle-switch">
                    <label for="darkmode-switch" class="toggle-switch">
                        <input id="darkmode-switch" type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                    <a id="auth-signin" href="#" class="btn-primary">
                        <i class="fa-regular fa-user"></i>
                        <span>Sign in / up</span>
                    </a>
                </div>
                <button class="btn-mobile">
                    <i class="fa-solid fa-bars"></i>
                </button>

            </div>
        </div>
    );
}