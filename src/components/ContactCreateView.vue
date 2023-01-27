<template>
  <div class="px-48">
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
  <div class="block max-w-lg p-6 mx-auto mt-8 bg-white rounded-lg shadow-lg">
    <Form @submit="onSubmit">
      <div class="mb-6 form-group">
        <label for="name" class="inline-block mb-2 text-gray-700 form-label"
          >Name</label
        >
        <Field
          name="name"
          type="text"
          class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700
            focus:bg-white
            focus:border-blue-600
            focus:outline-none
          "
          autocomplete="off"
          :rules="validateName"
          :model-value="contact.name"
        />
        <ErrorMessage name="name" class="text-red-600 mt-1"/>
      </div>
      <div class="mb-6 form-group">
        <label for="contact" class="inline-block mb-2 text-gray-700 form-label"
          >Contact</label
        >
        <Field
          name="contact"
          type="text"
          class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700
            focus:bg-white
            focus:border-blue-600
            focus:outline-none
          "
          autocomplete="off"
          :rules="validateContact"
          :model-value="contact.contact"
        />
        <ErrorMessage name="contact" class="text-red-600 mt-1"/>
      </div>
      <div class="mb-6 form-group">
        <label for="email" class="inline-block mb-2 text-gray-700 form-label"
          >Email</label
        >
        <Field
          name="email"
          type="email"
          class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700
            focus:bg-white
            focus:border-blue-600
            focus:outline-none
          "
          autocomplete="off"
          :rules="validateEmail"
          :model-value="contact.email"
        />
        <ErrorMessage name="email" class="text-red-600 mt-1" />
      </div>
      <div class="mb-6 form-group">
        <label for="imgSrc" class="inline-block mb-2 text-gray-700 form-label"
          >Image Src</label
        >
        <Field
          name="imgSrc"
          type="text"
          class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700
            focus:bg-white
            focus:border-blue-600
            focus:outline-none
          "
          autocomplete="off"
          :rules="validateImage"
          :model-value="contact.imgSrc"
          placeholder="Please type any number(1~99)"
        />
        <ErrorMessage name="imgSrc" class="text-red-600 mt-1" />
      </div>
      <button
        class="
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
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
      >
        Submit
      </button>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  name: "ContactCreateView",
  components: { Form, Field, ErrorMessage },
  data: function () {
    return {
      contact: {},
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values);
      if (!this.contact.id) {
        this.create(values);
      } else {
        this.edit(this.contact.id, values);
      }
    },

    validateName(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      // if the field should be at least 6 characters
      if (value.length < 6) {
        return "This field must be at least 6 characters";
      }

      return true;
    },

    validateContact(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      // if the field is not a valid email
      const regex = /^\d{9}$/;
      if (!regex.test(value)) {
        return "This field should be 9 digits";
      }
      // if the field exists
      if (!this.contact.id) {
        const contactList = localStorage.getItem("contacts");
        if (contactList.includes(value)) {
          return "This field should be unique";
        }
      }
      // All is good
      return true;
    },

    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      // if the field exists
      if (!this.contact.id) {
        const contactList = localStorage.getItem("contacts");
        if (contactList.includes(value)) {
          return "This field should be unique";
        }
      }
      // All is good
      return true;
    },

    validateImage(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }

      const regex = /^\d{1,2}$/;
      if (!regex.test(value)) {
        return "This field should be number";
      }

      return true;
    },

    getDataFromLocalStorage(id) {
      let contactList = JSON.parse(localStorage.getItem("contacts"));
      this.contact = contactList.find((val) => val.id == id);
    },

    goBack() {
      this.$router.push("/contact");
    },

    create(newData) {
      let contactList = JSON.parse(localStorage.getItem("contacts"));
      contactList.push({ id: Date.now(), ...newData });
      localStorage.setItem("contacts", JSON.stringify(contactList));
      this.$router.push("/contact");
    },

    edit(id, newData) {
      console.log("update:", id);
      let contactList = JSON.parse(localStorage.getItem("contacts"));
      let newContactList = contactList.map((val) => {
        return val.id == id ? Object.assign({}, { id, ...newData }) : val;
      });
      localStorage.setItem("contacts", JSON.stringify(newContactList));
      this.$router.push("/contact");
    },
  },
  mounted() {
    const id = this.$route.params.id;
    if (id) this.getDataFromLocalStorage(id);
  },
};
</script>