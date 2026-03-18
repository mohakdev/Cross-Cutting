export function isSignedIn() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem("signedIn") === "true";
}

export function signIn() {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("signedIn", "true");
  }
}

export function signOut() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("signedIn");
  }
}
