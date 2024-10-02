import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lato, Abhaya_Libre } from "next/font/google";
import theme from "../../theme/theme";
import { ThemeProvider } from "@mui/system";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});
const abhaya_libre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lato.variable} ${abhaya_libre.variable}`}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
            transition={Bounce}
          />
          <Component {...pageProps} />
          <ToastContainer />
        </Provider>
      </ThemeProvider>
    </main>
  );
}
