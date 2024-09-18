import '../scss/vd.scss';


const DEBUG = false;


class vd {


  constructor() {
    this._mainScroll = null;
    this._version = '1.0.0';
    // Begin website initialization
    if (DEBUG === true) { console.log(`valentinedondon.fr v${this._version} : Begin website initialization`); }
    this._buildPage()
      .then(this._events.bind(this))
      .then(this._finalizeInit.bind(this))
      .catch(err => { // Error are displayed even if DEBUG is set to false, to notify end user to contact support
        console.error(`valentinedondon.fr v${this._version} : Fatal error during initialization, please contact support :\n`, err);
      })
      .finally(() => {
        if (DEBUG === true) { console.log(`valentinedondon.fr v${this._version} : Website initialization done`); }
      });
  }


  _buildPage() {
    if (DEBUG === true) { console.log(`5. Build HTML DOM depending on the page type`); }
    return new Promise(resolve => {
      document.querySelector('#info-modal').addEventListener('click', this._infoModal.bind(this));
      resolve();
    });
  }


  _events() {
    // Blur modal event
    document.getElementById('modal-overlay').addEventListener('click', this._closeModal.bind(this));
  }


  _finalizeInit() {
    return new Promise(resolve => {
      document.querySelector('#loading-overlay').style.opacity = 0;
      setTimeout(() => {
        document.querySelector('#loading-overlay').style.display = 'none';
        this._mainScroll = new window.ScrollBar({
          target: document.body,
          style: {
            color: 'white'
          }
        });
        // Force raf after scroll creation to make scrollbar properly visible
        requestAnimationFrame(() => {
          this._mainScroll.updateScrollbar();
          resolve();
        });
      }, 400);
    });
  }


  // Modal related methods


  _infoModal() {
    const overlay = document.getElementById('modal-overlay');
    // Open modal event
    fetch(`assets/html/infomodal.html`).then(data => {
      overlay.style.display = 'flex';
      data.text().then(htmlString => {
        const container = document.createRange().createContextualFragment(htmlString);
        overlay.appendChild(container);
        setTimeout(() => overlay.style.opacity = 1, 50);
      });
    }).catch(e => console.error(e));
  }


  _closeModal(e) {
    if (e.srcElement.id !== 'modal-overlay' && e.srcElement.className !== 'close-modal') {
      return;
    }

    const overlay = document.getElementById('modal-overlay');
    if (overlay.style.display === 'flex') {
      overlay.style.opacity = 0;
      setTimeout(() => {
        overlay.innerHTML = '';
        overlay.style = '';
      }, 400);
    }
  }


}


export default vd;
