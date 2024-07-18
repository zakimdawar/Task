import React from "react";

const App=()=>
{
  return(
    <>
    <div class="bg-gray-100">
  <div class="container mx-auto p-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* <!-- Card 1 --> */}
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Product Image" class="w-full h-48 object-cover"/>
        <div class="p-6">
          <h2 class="text-lg font-bold mb-2">Product Title</h2>
          <p class="text-gray-700 mb-4">This is a brief description of the product.</p>
          <div class="flex items-center mb-4">
            <span class="text-xl font-bold text-gray-900">$99.99</span>
            <span class="ml-4 text-yellow-500">★★★★☆</span>
          </div>
          <button class="bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
        </div>
      </div>
      {/* <!-- Card 2 --> */}
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Product Image" class="w-full h-48 object-cover"/>
        <div class="p-6">
          <h2 class="text-lg font-bold mb-2">Product Title</h2>
          <p class="text-gray-700 mb-4">This is a brief description of the product.</p>
          <div class="flex items-center mb-4">
            <span class="text-xl font-bold text-gray-900">$99.99</span>
            <span class="ml-4 text-yellow-500">★★★★☆</span>
          </div>
          <button class="bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
        </div>
      </div>
      {/* <!-- Card 3 --> */}
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Product Image" class="w-full h-48 object-cover"/>
        <div class="p-6">
          <h2 class="text-lg font-bold mb-2">Product Title</h2>
          <p class="text-gray-700 mb-4">This is a brief description of the product.</p>
          <div class="flex items-center mb-4">
            <span class="text-xl font-bold text-gray-900">$99.99</span>
            <span class="ml-4 text-yellow-500">★★★★☆</span>
          </div>
          <button class="bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
        </div>
      </div>
      {/* <!-- Card 4 --> */}
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="https://via.placeholder.com/300" alt="Product Image" class="w-full h-48 object-cover"/>
        <div class="p-6">
          <h2 class="text-lg font-bold mb-2">Product Title</h2>
          <p class="text-gray-700 mb-4">This is a brief description of the product.</p>
          <div class="flex items-center mb-4">
            <span class="text-xl font-bold text-gray-900">$99.99</span>
            <span class="ml-4 text-yellow-500">★★★★☆</span>
          </div>
          <button class="bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )

}

export default App;