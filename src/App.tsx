import { Portfolio } from "./Portfolio"
import { LanguageProvider } from "./LanguageContext"

function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  )
}
export default App