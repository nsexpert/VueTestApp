<template>
  <div class="px-24 mx-auto">
    <div class="px-24">
      <button
        class="
          flex
          items-center
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-sm
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out
        "
        @click="goBack"
      >
        Back
      </button>
    </div>
    <div class="max-w-lg p-6 mx-auto space-y-4 bg-white rounded-lg shadow-lg">
        <img :src="`https://picsum.photos/200/300?random=${contact?.imgSrc}`" class="w-48 h-48 mx-auto rounded-full"/>
      <h1 class="text-2xl">Name: {{ contact?.name }}</h1>
      <h1 class="text-2xl">Contact: {{ contact?.contact }}</h1>
      <h1 class="text-2xl">Email: {{ contact?.email }}</h1>
    </div>
  </div>
  <!-- <h1>{{ contact?.id }}</h1>
    <h1>{{ contact?.imgSrc }}</h1> -->
</template>

<script>
export default {
  name: "ContactDetailView",
  data: function () {
    return {
      contact: {},
    };
  },
  methods: {
    getDataFromLocalStorage(id) {
      let contactList = JSON.parse(localStorage.getItem("contacts"));
      this.contact = contactList.find((val) => val.id == id);
    },
    goBack() {
      this.$router.push("/contact");
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.getDataFromLocalStorage(id);
  },
};
</script>