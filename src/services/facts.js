const CAT_FACT_API = "https://catfact.ninja/fact"

export const getRandomCatFact = async () => {
    const response = await fetch(CAT_FACT_API)
    const data = await response.json()
    return data.fact
}