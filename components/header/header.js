class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light py-4">
            <a class="navbar-brand ps-4 m-auto" href="#">
                <img src="resources/images/header-logo2.png" class="d-inline-block align-top" alt="">
            </a>
            <button class="navbar-toggler mr15" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end ml20" id="navbarTogglerDemo02">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Listing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Plans</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Login/Register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">List Property</a>
                </li>
                </ul>
            </div>
        </nav>
        `
    }
}

customElements.define('main-header', Header);