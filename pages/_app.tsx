import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'katex/dist/katex.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
