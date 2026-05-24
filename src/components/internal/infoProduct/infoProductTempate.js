
export const productImgandShop = (product) => `
<a href="infoCardProduct.html?id=${product.id}">
    <div class="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">

        <div class="w-full md:w-1/2">
            <img src="${product.images[0]}" class="w-full rounded-xl">
        </div>

        <div class="w-full md:w-1/2 flex flex-col gap-4">
            <h1>${product.name}</h1>
            <p>$${product.price.toLocaleString()}</p>
        </div>

    </div>
</a>
`;