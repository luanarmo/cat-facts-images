import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

function App() {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = () => {
        refreshFact()
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <h1 className="text-4xl mb-4">Cat's facts</h1>
            <button
                onClick={handleClick}
                className="mb-4 px-4 py-2 bg-indigo-800 rounded hover:bg-indigo-600 transition"
            >
                Get new fact
            </button>
            {fact && <h3 className="mb-4 text-lg">{fact}</h3>}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={`Image extracted using the first three words for ${fact}`}
                    className="w-80 h-80 rounded-sm"
                />
            )}
        </main>
    )
}

export default App
