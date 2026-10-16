class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                    <header>
                        <div>
                            <nav>
                                <ul>
                                    <li class="separarInicio">
                                        <a href="index.html">Início</a>
                                    </li>

                                    <li>
                                        <a href="eucariontesProcariontes.html">Células</a>
                                    </li>
                                    <li>
                                        <a href="organelas.html">Organelas</a>
                                    </li>


                                    <li>
                                        <a href="referencias.html">Referências</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>
        `
    }
}

customElements.define('main-header', Header)