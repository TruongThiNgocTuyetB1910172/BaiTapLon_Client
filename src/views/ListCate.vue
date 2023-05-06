<template>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
          
            <th class="text-left">
              Name
            </th>
            
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in categories"
            :key="item._id"
          >
         
            <td>{{ item.name }}</td>
            
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </template>
  <script>
  import API from '@/services/api.category';
  
    export default {
      data () {
        return {
      
          categories:[],
        };
      },
      async created (){
        this.categories = await API.getAllCategory();
      }
    }
  </script>