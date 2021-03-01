import { makeObservable, observable } from "mobx";

class AppState {
  pref = (a, b) => {
    return a ? a : b;
  };

  wallImage =
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1207/aeobaos-web.jpg";

  //"https://images.pexels.com/photos/1054221/pexels-photo-1054221.jpeg";
  //
  constructor() {
    makeObservable(this, {
      wallImage: observable
    });
  }
}

export default AppState;
