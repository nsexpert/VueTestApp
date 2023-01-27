<template>
  <tr class="border-b">
    <td class="text-xl font-medium text-gray-900 px-6 py-4 text-center">
      {{ data?.name }}
    </td>
    <td class="text-xl font-medium text-gray-900 px-6 py-4 text-center">
      {{ data?.contact }}
    </td>
    <td class="text-xl font-medium text-gray-900 px-6 py-4 text-center">
      {{ data?.email }}
    </td>
    <td class="px-6 py-4">
      <div class="flex space-x-2 justify-center items-center">
        <RouterLink
          :to="`/contact/${data?.id}`"
          class="
            flex
            items-center
            px-6
            py-2.5
            bg-gray-200
            text-gray-700
            font-medium
            text-sm
            leading-tight
            rounded
            shadow-md
            hover:bg-gray-300 hover:shadow-lg
            focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-gray-400 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
          >Detail</RouterLink
        >
        <RouterLink
          :to="`/contact/edit/${data?.id}`"
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
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
          >Edit</RouterLink
        >
        <button
          class="
            flex
            items-center
            px-6
            py-2.5
            bg-red-600
            text-white
            font-medium
            text-sm
            leading-tight
            rounded
            shadow-md
            hover:bg-red-700 hover:shadow-lg
            focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-red-800 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
          @click="$emit('showModal', data?.id)"
        >
          Delete
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ContactListItem",
  props: {
    data: Object,
  },
  methods: {},
};
</script>
