import { useState } from "react";
import { Dock, Navbar, Welcome } from "./components"
import { Draggable } from 'gsap/Draggable';
import BootScreen from "./components/BootScreen";
// gsap.registerPlugin(Draggable);

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  // 2. Logic to run when boot finishes
  const handleBootComplete = () => {
    setIsLoading(false);
  };

  return (
    <main>
      {isLoading ? (
        // 3. Show BootScreen if loading
        <BootScreen onComplete={handleBootComplete} />
      ) : (
        // 4. Show your actual app content if loading is done
        <>
          <Navbar />
          <Welcome />
          {/* ... Your other windows/components ... */}
          <Dock />
        </>
      )}
    </main>
  )
}

export default App
