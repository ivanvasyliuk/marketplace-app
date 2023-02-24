class NavigationService {
  constructor() {
    this._navigation = null;
  }
  init(navigation) {
    if (this._navigation) {
      return;
    }

    this._navigation = navigation;
  }

  navigate(routeName, params) {
    this._navigation.dispatch(NavigationActions);
  }
}

export default new NavigationService();
