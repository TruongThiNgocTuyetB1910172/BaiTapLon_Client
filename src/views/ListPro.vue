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
      <v-btn  :to="{ name: 'add' }" class="primary"><v-icon>mdi-plus-circle</v-icon>Thêm mới</v-btn>
    </div>
    <div>
        <div>
          <h5 class="pt-5" >
          Sắp xếp số lượng:&nbsp;&nbsp;
          <v-btn @click="sortByAsc"
            
          > <v-icon>mdi-call-made</v-icon></v-btn>
          &nbsp;&nbsp;
          <v-btn @click="sortByDesc"
           
          > <v-icon>mdi-call-received</v-icon></v-btn>

         
          </h5>
        
        </div>
        <div>
          <h5 class="pt-5">
          Sắp xếp giá:&nbsp;&nbsp;
          <v-btn @click="priceByAsc"
            
          ><v-icon>mdi-call-made</v-icon></v-btn>
          &nbsp;&nbsp;
          <v-btn @click="priceByDesc"
           
          ><v-icon>mdi-call-received</v-icon></v-btn>

         
          </h5>
        </div>
      
      </div>
      <br />
    

  
  <v-simple-table>
    <template v-slot:default>
      
      <thead>
        <tr>
          <th class="text-left">
            Ảnh
          </th>
          <th class="text-left">
            Tên
          </th>
          <th class="text-left">
            Xuất xứ
          </th>
          <th class="text-left">
            Mô tả
          </th>
          <th class="text-left">
            Giá
          </th>
          <th class="text-left">
            Số lượng
          </th>
          <th class="text-left">
            Action
          </th>
          
        </tr>
      </thead>
      <tbody>
    
        <tr
        v-for="item in filteredProduct"
        :key="item._id"
        >
        <td>
            <v-img
              height="50px"
              width="50px"
              :src="`/${item.image}`"
            ></v-img>
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.detail }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.qty }}</td>
          <td>
            <!-- <v-icon aria-hidden="false">
              mdi-delete
            </v-icon > -->
            <v-btn :to="{ name: 'edit-pro', params: { id: item._id } }"> <v-icon aria-hidden="false">
              mdi-pencil-box
            </v-icon ></v-btn>
            <v-btn  text @click="removePro(item._id)">
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
import API from "../services/api.product";




export default {
  name: "add-pro",
  data() {
    return {
      search: "",
      show: false,
      products: [],
      category: [],
      sortBy: "",
      keys: ["Tên", "Số Lượng", "Giá"],
    };
  },

  methods: {
    
    sortByAsc() {
      this.products.sort((a, b) => (a.qty < b.qty ? -1 : 1));   
    },
    sortByDesc() {
      this.products.sort((a, b) => (a.qty > b.qty ? -1 : 1));
    },
    priceByAsc() {
        this.products.sort((a, b) => (a.price < b.price ? -1 : 1));
        },
      priceByDesc() {
        this.products.sort((a, b) => (a.price > b.price ? -1 : 1));
      },
    async removePro(id) {
      console.log(id);
      const res = API.deleteProduct(id);
      this.created();
      this.show = true;
    },
    async created() {
      this.products = await API.getAllProduct();
   
      // console.log(this.products);
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


    filteredProduct() {
      return this.products.filter((temp) => temp.name.includes(this.search));
    },
  
  },
};
</script>


