class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <h4>&copy; 2024 <br> Cauê J. L. Kreutz <br> Gabriela Senderski <br> Ian M. Veiga </h4>
            </footer>
        `
    }
}

customElements.define('main-footer', Footer)
