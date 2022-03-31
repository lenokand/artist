// бургер
const icon = document.querySelector('.burger');
let menu = document.querySelector('.menu_hiden')
let body = document.body
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("show");
    menu.classList.toggle("show");
    body.classList.toggle('menu_open')


 
});


    




class ItcTabs {
  constructor(target, config) {
    const defaultConfig = {};
    this._config = Object.assign(defaultConfig, config);
    this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
    this._elButtons = this._elTabs.querySelectorAll('.info-tab_navigation .info-tab_item');

    // this._elCountTotal = this._elTabs.querySelector('.tab_count_total');//кастомизация
    // this._elCountCurent = this._elTabs.querySelector('.tab_count_current');//кастомизация
    
    this._elPanes = this._elTabs.querySelectorAll('.info-tab_content');
    this._eventShow = new Event('tab.itc.change');
    this._init();
    this._events();
  }
  _init() {
    this._elTabs.setAttribute('role', 'tablist');

    // this._elCountTotal.innerText = this._elButtons.length //кастомизация
    
    this._elButtons.forEach((el, index) => {
      el.dataset.index = index;
      el.setAttribute('role', 'tab');
      this._elPanes[index].setAttribute('role', 'tabpanel');
    });
    
  }
  show(elLinkTarget) {
    const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];


    // this._elCountCurent.innerText = +elLinkTarget.dataset.index + 1//кастомизация

    const elLinkActive = this._elTabs.querySelector('.info-tab_navigation .info-tab_item.active');
    const elPaneShow = this._elTabs.querySelector('.info-tab_content.active');
    if (elLinkTarget === elLinkActive) {
      return;
    }

    elLinkActive ? elLinkActive.classList.remove('active') : null;
    elPaneShow ? elPaneShow.classList.remove('active') : null;
    elLinkTarget.classList.add('active');

    elPaneTarget.classList.add('active');
    this._elTabs.dispatchEvent(this._eventShow);
    elLinkTarget.focus();
  }
  showByIndex(index) {
    
    const elLinkTarget = this._elButtons[index];
    elLinkTarget ? this.show(elLinkTarget) : null;
  };
  _events() {
    this._elTabs.addEventListener('click', (e) => {
      
      const target = e.target.closest('.info-tab_navigation .info-tab_item');
      if (target) {
        e.preventDefault();
        this.show(target);
        
      }

    });
  }
}

const tabs = document.querySelectorAll('.info-block');
for (let i = 0, length = tabs.length; i < length; i++) {
  new ItcTabs(tabs[i]);
}

// new ItcTabs('.info-block');