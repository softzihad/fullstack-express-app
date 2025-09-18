export async function getProducts(req, res) {
    console.log("Fetching products...");
    res.send("List of products");
}

export async function getGenres(req, res) {
    console.log("Fetching genres...");
    res.send("List of genres");
}
    
