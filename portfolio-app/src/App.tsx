import { MantineProvider } from "@mantine/core";
import HomeComponent from "./components/HomeComponent";
import '@mantine/core/styles.css';
export default function App() {
  return (
    <MantineProvider>
    <h1 className="text-red-500">
    <HomeComponent/>
    </h1>
    </MantineProvider>
  )
}