const API = 'https://api.escuelajs.co/api/v1';
const cont = document.querySelector(".content")

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return await data;

}

(async () => {
    try {
        const productos = await fetchData(`${API}/products`);
        const producto = await fetchData(`${API}/products/${productos[20].id}`);
        const category = await fetchData(`${API}/categories/${producto.category.id}`);

        let view = `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${producto.images}" alt="" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${category.name} 
                        </h3>
                    </div>
                </div>
            `;  
            
        cont.innerHTML = view;

    } catch (error) {
    console.log(error);
    }
})();




