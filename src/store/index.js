import store from './store'
export {
  openMenu,
  closeMenu
} from './Slices/settingSlice'
export {
  changeLanguage
} from './Slices/permSettingSlice'

const contextStore = {
  sideMenu: {
    open: false
  }
};

export { contextStore };

export default store;
