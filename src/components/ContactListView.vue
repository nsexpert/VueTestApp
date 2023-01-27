<template>
  <div class="px-24 bg-white">
    <div class="flex justify-between mb-16">
      <h1 class="text-5xl">Contacts</h1>
      <RouterLink
        to="/contact/create"
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
        >New Contact</RouterLink
      >
    </div>
    <div>
      <table class="min-w-full">
        <thead class="border-b">
          <tr>
            <th
              scope="col"
              class="text-xl font-medium text-gray-900 px-6 py-4 text-center"
            >
              Name
            </th>
            <th
              scope="col"
              class="text-xl font-medium text-gray-900 px-6 py-4 text-center"
            >
              Contact
            </th>
            <th
              scope="col"
              class="text-xl font-medium text-gray-900 px-6 py-4 text-center"
            >
              Email
            </th>
            <th
              scope="col"
              class="text-xl font-medium text-gray-900 px-6 py-4 text-center"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody v-for="contact in contactList" :key="contact">
          <contact-list-item
            :data="contact"
            @showModal="showModal"
          ></contact-list-item>
        </tbody>
      </table>
    </div>
  </div>
  <CustomModal
    v-if="isModalVisible"
    title="Confirm Action"
    @close="isModalVisible = false"
  >
    <p class="text-gray-800 text-md font-semibold">
      Are you really sure to delete this contact information?
    </p>

    <div class="text-right mt-4 border-t border-gray-200 pt-4">
      <button
        type="button"
        @click="isModalVisible = false"
        class="
          px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-sm
          leading-tight
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out
        "
      >
        Cancel
      </button>
      <button
        type="button"
        class="
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-sm
          leading-tight
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out
          ml-1
        "
        @click="deleteContact"
      >
        Confirm
      </button>
    </div>
  </CustomModal>
</template>

<script>
import ContactListItem from "./ContactListItem.vue";
import CustomModal from "./CustomModal.vue";

export default {
  name: "ContactListView",
  components: {
    ContactListItem,
    CustomModal,
  },
  data: function () {
    return {
      contactList: [],
      isModalVisible: false,
      selectID: null,
    };
  },
  mounted() {
    this.contactList = JSON.parse(localStorage.getItem('contacts'));
  },
  methods: {
    showModal(id) {
      this.isModalVisible = true;
      this.selectID = id;
    },

    deleteContact() {
      if(this.selectID)
      {
        this.contactList = this.contactList.filter((val) => val.id != this.selectID);
        localStorage.setItem('contacts', JSON.stringify(this.contactList));
        this.isModalVisible = false;
      }
    },
  },
};
</script>

<style></style>
