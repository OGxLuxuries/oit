// proxy 1 - https://solace.ist.rit.edu/~dsbics/proxy/
// proxy 2 - https://people.rit.edu/~dsbics/proxy/
// 2nd server - https://ischool.gccis.rit.edu/api/

const proxyServer = 'https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/'

// endpoint is something like 'about/', 'degrees/'
async function getData(endpoint) {
    // concatenation
    const result = await fetch(`${proxyServer}${endpoint}`)
    return await result.json();
}


export default getData;
