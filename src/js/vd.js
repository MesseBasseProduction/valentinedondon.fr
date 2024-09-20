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
    document.getElementById('nav-about').addEventListener('click', this._scrollToView.bind(this));
    document.getElementById('nav-book').addEventListener('click', this._scrollToView.bind(this));
    document.getElementById('nav-contact').addEventListener('click', this._scrollToView.bind(this));

    document.getElementById('bw-switch').addEventListener('click', this._switchPhotosBW.bind(this));

    const photos = document.querySelector('#gallery').children;
    for (let i = 0; i < photos.length; ++i) {
      photos[i].addEventListener('click', this._slideshowModal.bind(this, i));
    }
  }


  _finalizeInit() {
    return new Promise(resolve => {
      document.querySelector('#loading-overlay').style.opacity = 0;
      setTimeout(() => {
        document.querySelector('#loading-overlay').style.display = 'none';
        this._mainScroll = new window.ScrollBar({
          target: document.querySelector('#page-content'),
          minSize: 200,
          style: {
            color: '#758C78'
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


  // Event callback


  _scrollToView(e) {
    const target = e.target.id.split('-')[1];
    document.getElementById(target).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }


  _switchPhotosBW(e) {
    const imageSrc = ['vd5', 'vd2', 'vd1', 'vd3', 'vd7', 'vd4', 'vd6', 'vd8', 'vd9', 'vd11', 'vd10'];
    const photos = document.querySelector('#gallery').children;
    for (let i = 0; i < photos.length; ++i) {
      if (e.target.checked === true) {
        photos[i].src = `./assets/img/photos/${imageSrc[i]}-nb.webp`;
      } else {
        photos[i].src = `./assets/img/photos/${imageSrc[i]}.webp`;
      }
    }
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


  _slideshowModal(index) {
    const overlay = document.getElementById('modal-overlay');
    const photos = document.querySelector('#gallery').children;
    fetch(`assets/html/slideshowmodal.html`).then(data => {
      overlay.style.display = 'flex';
      data.text().then(htmlString => {
        const container = document.createRange().createContextualFragment(htmlString);
        container.querySelector('#slideshow-image').src = photos[index].src;
        // Internal method to update curently selected photo
        let currentIndex = index;
        let timeoutId = -1;
        const updateSelection = newIndex => {
          const selectors = overlay.querySelector('#slide-selector').children;
          for (let i = 0; i < selectors.length; ++i) {
            selectors[i].classList.remove('selected');
            if (i === newIndex) {
              selectors[i].classList.add('selected');
            }
          }
          overlay.querySelector('#slideshow-image').src = photos[newIndex].src;
          overlay.querySelector('#slideshow-image').className = photos[newIndex].className;
          currentIndex = newIndex;
          overlay.querySelector('#slide-selector').style.opacity = 1;
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            overlay.querySelector('#slide-selector').style.opacity = .3;            
          }, 1000);
        };
        // Iterate over photos to create slide selectors and make them interactive
        for (let i = 0; i < photos.length; ++i) {
          const selector = document.createElement('DIV');
          selector.classList.add('selector');
          if (i === index) {
            selector.classList.add('selected');
          }
          selector.addEventListener('click', updateSelection.bind(this, i));
          container.querySelector('#slide-selector').appendChild(selector);
        }
        // Handle next and previous buttons
        container.querySelector('#previous').addEventListener('click', () => {
          currentIndex = (((currentIndex - 1) % photos.length) + photos.length) % photos.length;
          updateSelection(currentIndex);
        });
        container.querySelector('#next').addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % photos.length;
          updateSelection(currentIndex);
        });
        // Then creating the modal
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
