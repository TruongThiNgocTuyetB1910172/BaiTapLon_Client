<template>
    <v-container>
      <v-alert
        border="left"
        close-text
        dismissible
        dark
        color="green accent-4"
        v-if="this.$route.params.message"
      >
        {{ this.$route.params.message }}
      </v-alert>
      <!-- alert delete -->
      <v-alert
        border="left"
        close-text
        dismissible
        dark
        color="green accent-4"
        v-if="show"
      >
        Xóa thành công!
      </v-alert>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Tìm kiếm (tên)"
        single-line
        hide-details
      >
      </v-text-field>
     
      <br />
      <div>
      <v-btn  :to="{ name: 'add-user' }" class="primary"><v-icon>mdi-plus-circle</v-icon>Thêm mới</v-btn>
    </div>
      
  
    
    <v-simple-table>
      <template v-slot:default>
        
        <thead>
          <tr>
            <th class="text-left">
              Tên
            </th>
            <th class="text-left">
              Email
            </th>
            <th class="text-left">
              Giới tính
            </th>
            <th class="text-left">
              Action
            </th>
            
          </tr>
        </thead>
        <tbody>
      
          <tr
          v-for="item in filteredUser"
          :key="item._id"
          >
          
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.email }}</td>
        
           
            <td>
              <!-- <v-icon aria-hidden="false">
                mdi-delete
              </v-icon > -->
              <v-btn :to="{ name: 'edit-user', params: { id: item._id } }"> <v-icon aria-hidden="false">
                mdi-pencil-box
              </v-icon ></v-btn>
              <v-btn  text @click="removeUser(item._id)">
                <v-icon aria-hidden="false">
                mdi-delete
              </v-icon >
              </v-btn>
            </td>
          
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
  </template>
  <script>
  import axios from "axios";
  import API from "@/services/api.user";
  export default {
    name: "HomeUser",
    data() {
      return {
        stt: 1,
        show: false,
        users: [],
        search: "",
      };
    },
    methods: {
      async removeUser(id) {
        console.log(id);
        const res = API.deleteUser(id);
        this.created();
        this.show = true;
      },
      async created() {
        this.users = await API.getAllUser();
        console.log(this.users);
      },
    },
  
    async mounted() {
      this.created();
      let user = localStorage.getItem("user-info");
      if (!user) {
        this.$router.push({ name: "login" });
      }
    },
    computed: {
      filteredUser: function () {
        return this.users.filter((user) => {
          return user.name.match(this.search);
        });
      },
    },
  };
  </script>
  <style>
  .i {
    width: 100px;
    height: 100px;
  }
  </style>