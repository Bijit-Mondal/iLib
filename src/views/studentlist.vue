<template class="admin">
  <div class="center cursive color">
    <vs-table>
      <template #header>
        <vs-input v-model="search" border placeholder="Search" />
      </template>
      <template #thead>
        <vs-tr>
          <vs-th sort @click="users = $vs.sortData($event ,users, 'name')">
            Name
          </vs-th>
          <vs-th sort @click="users = $vs.sortData($event ,users, 'email')">
            Email
          </vs-th>
          <vs-th sort @click="users = $vs.sortData($event ,users, 'id')">
            Id
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(tr, i) in $vs.getSearch(users, search)"
          :data="tr"
        >
          <vs-td>
            {{ tr.name }}
          </vs-td>
          <vs-td>
          {{ tr.email }}
          </vs-td>
          <vs-td>
          {{ tr.id }}
          </vs-td>
          <template #expand>
            <vs-row justify="space-between">
              <vs-col w="2">
                  <vs-avatar>
                    <img :src="`https://vuesax.com/avatars/avatar-${i + 1}.png`" alt="">
                  </vs-avatar>
              </vs-col>
              <vs-col w="3">
                    <p>
                      {{ tr.name }}
                    </p>
              </vs-col>
              <vs-col w="3">
                <vs-button
                  icon
                  size="mini"
                  circle
                  gradient
                  color="success"
                  animation-type="rotate"
                >
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"/></svg>
                  <template #animate >
                    <p class='black pure_cursive'>Call</p>
                  </template>
                </vs-button>
              </vs-col>
              <vs-col w="3">
                <vs-button  flat color="#ADD8E6" danger>
                  <span class="pure_cursive">Student History</span>
                </vs-button>
              </vs-col>
            </vs-row>

          </template>

        </vs-tr>
      </template>

    </vs-table>
  </div>
</template>

<script>
  export default {
    data:() => ({
      search: '',
      users: [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "website": "hildegard.org",
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "website": "anastasia.net",
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "website": "ramiro.info",
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": "Karianne",
          "email": "Julianne.OConner@kory.org",
          "website": "kale.biz",
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Kamren",
          "email": "Lucio_Hettinger@annie.ca",
          "website": "demarco.info",
        },
        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery",
          "email": "Karley_Dach@jasper.info",
          "website": "ola.org",
        },
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles",
          "email": "Telly.Hoeger@billy.biz",
          "website": "elvis.io",
        },
        {
          "id": 8,
          "name": "Nicholas Runolfsdottir V",
          "username": "Maxime_Nienow",
          "email": "Sherwood@rosamond.me",
          "website": "jacynthe.com",
        },
        {
          "id": 9,
          "name": "Glenna Reichert",
          "username": "Delphine",
          "email": "Chaim_McDermott@dana.io",
          "website": "conrad.com",
        },
        {
          "id": 10,
          "name": "Clementina DuBuque",
          "username": "Moriah.Stanton",
          "email": "Rey.Padberg@karina.biz",
          "website": "ambrose.net",
        }
      ]
    })
  }
  </script>


<style scoped>
.color{
  color:lavender;
}
.black{
  color: black;
}
.cursive{
  font-family: cursive;
}
.pure_cursive{
    font-family: cursive;
}
@media screen and (max-width: 990px){
   .cursive{
      font-family: 'Inconsolata', cursive;
   }
 }
</style>
