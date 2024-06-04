import { ThemeProvider } from "../context/themes";
import Page from '../features/Page/Page';

export default function Home() {
  return (
    <main>
      <ThemeProvider>
        <Page />
      </ThemeProvider>
    </main>
  );
}
