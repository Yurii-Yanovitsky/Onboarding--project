export const sendRequest = async (method: string, url: string, body?: BodyInit | null | undefined) => {
    return await fetch(url,
        {
            method: method,
            body: body,
            headers: { 'accept': 'application/json', 'content-type': 'application/json' }
        })
        .then(async response => {
            if (response.ok) {
                return response.json()
            }
            else {
                const error = await response.json();
                throw new Error(error.error)
            }
        })
}