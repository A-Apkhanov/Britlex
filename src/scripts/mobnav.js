const header = document.querySelector(".header");
const body = document.querySelector("body");

class Header {
  constructor(header, body) {
    this._header = header;
    this._body = body;
    this._menu = this._header.querySelector(".header_menu");
    this._burger = this._header.querySelector(".header_burger");
    this._links = this._menu.querySelectorAll(".main-menu_link");
    this._isActive = false;

    this.handleClickBurger();
    this.handleClickLink();
  }

  toggleActive() {
    this._burger.classList.toggle("active");
    this._menu.classList.toggle("active");
    this.toggleBodyOverflow();
  }

  toggleBodyOverflow() {
    this._body.style.overflow = this._isActive ? "hidden" : "visible";
  }

  handleClickBurger() {
    this._burger.addEventListener("click", () => {
      this._isActive = !this._isActive;
      this.toggleActive();
    });
  }

  handleClickLink() {
    this._links.forEach(
      (link) => link.addEventListener("click", () => {
        this._isActive = false;
        this.toggleActive();
      })
    );
  }
}

new Header(header, body);
