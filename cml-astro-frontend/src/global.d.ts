export {};

declare global {
  interface Window {
    signIn: () => void;
    signOut: () => void;
  }
}
