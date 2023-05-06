<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/308678368_1801517516849987_436027427750825268_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hgIAyq3RD6QAX9cNNci&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfD_FZD5a1HDLCLUJHlcOAKy3-PydJVYXC9HFVaib0vetg&oe=645935E7"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Tuyet Truong
            </v-list-item-title>
            <v-list-item-subtitle>tuyet@gmail.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-list dense>   
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to ="item.link" link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
              <v-list-item-icon>
                <v-icon>
                  {{ (icon = "fa-solid fa-right-from-bracket") }}
                  <!-- <font-awesome-icon icon="" /> -->
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title @click="logout"> <v-icon>mdi-logout</v-icon>Đăng xuất</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Trang quản lý</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
        { text: 'Quản lý user', icon: 'mdi-account-star' , link:"/list-user"},
        { text: 'Quản lý sản phẩm', icon: 'mdi-image-album', link:"/list-pro" },
        // { text: 'Thêm sản phẩm', icon: 'mdi-folder-plus' , link:"/add-pro"},
        // { text: 'Logout', icon: 'mdi-flag' , link:"/"},
      ],
  }),
  components: {
    // Login,
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
    },
  },
  // async mounted() {
  //   let user = localStorage.getItem("user-info");
  //   if (user) {
  //     this.show = true;
  //   }
  // },
};

</script>
