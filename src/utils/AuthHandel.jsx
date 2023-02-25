
class AuthHandle {
  static loggedIn() {
    if (localStorage.getItem("token") && localStorage.getItem("refresh") && localStorage.getItem("adminEmail")) {
      return true;
    } else {
      return false;
    }
  }
}

export default AuthHandle;