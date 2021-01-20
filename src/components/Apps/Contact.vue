<template>
  <section class="text-gray-700 body-font p-4 font-extralight">
    <form
      name="ask-question"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="flex flex-col w-full rounded-lg"
    >
      <label class="text-white"
        >Email:
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email"
          class="w-full px-4 py-2 mr-4 bg-gray-100 rounded-lg"
          required
        />
      </label>
      <label class="text-white">
        Name:
        <input
          id="name"
          type="name"
          name="name"
          placeholder="name"
          class="w-full px-4 py-2 mr-4 bg-gray-100 rounded-lg"
          required
        />
      </label>
      <label class="text-white">
        Message:
        <textarea
          id="message"
          type="message"
          name="message"
          placeholder="message"
          class="w-full px-4 h-40 py-2 mb-4 mr-4 bg-gray-100 rounded-lg"
          required
        ></textarea>
      </label>
      <button
        type="submit"
        class="px-8 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-xl"
      >
        Send message
      </button>
    </form>
  </section>
</template>

<script>
export default {}
</script>

<style>
textarea {
  resize: none;
}
</style>
