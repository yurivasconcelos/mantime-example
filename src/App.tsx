import "@mantine/core/styles.css";
import { Button, MantineProvider } from "@mantine/core";
import { theme } from "./theme";

export default function App() {
  return <MantineProvider theme={theme}>App
  
  <Button color='black'>Hey</Button>
  </MantineProvider>;
}
