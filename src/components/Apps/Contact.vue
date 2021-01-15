<template>
  <section class="text-gray-700 body-font p-4">
    <div>
      <div class="flex flex-col w-full rounded-lg">
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            class="w-full px-4 py-2 mb-4 mr-4 bg-gray-100 rounded-lg"
          />
        </div>
        <div>
          <input
            type="name"
            name="name"
            placeholder="name"
            class="w-full px-4 py-2 mb-4 mr-4 bg-gray-100 rounded-lg"
          />
        </div>
        <div class=" ">
          <textarea
            type="message"
            name="message"
            placeholder="message"
            class="w-full px-4 h-40 py-2 mb-4 mr-4 bg-gray-100 rounded-lg"
          ></textarea>
        </div>
        <button
          class="px-8 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-xl"
        >
          Button
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
