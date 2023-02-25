import AsyncStorage from "@react-native-async-storage/async-storage";

// axios.defaults.baseURL = ''

export const Auth = {
  _token: null,

  setToken(token) {
    this._token = token;
    AsyncStorage.setItem("__token", token);
  },

  isLoggedIn() {
    s;
    return !!this._token;
  },

  login({ email, password }) {
    // return axios.post('/api/auth/login', {
    //   email,
    //   password,
    // });
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            token: "fksdnfkndlf",
            user: {
              email,
              fullName: "Test User",
              id: "10",
              location: "fdsf",
              avatar:
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
              phone: "sdfdfdfdsf",
              createdAt: "dfsf",
              updatedAt: "gksfngkf",
            },
          },
        });
      }, 300);
    });
  },
  register({ email, password, fullName }) {
    return axios.post("/api/auth/register", {
      email,
      password,
      fullName,
    });
  },
};

export const Products = {
  createProduct(body) {
    return {
      data: {
        id: Date.now(),
        ownerId: "10",
        title: body.title,
        description: body.description,
        photos: [
          "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
        ],
        location: body.location,
        price: body.price,
        saved: false,
        createdAt: `${Date.now()}`,
        updatedAt: `${Date.now()}`,
        owner: {
          email: "testuser@gamil.com",
          fullName: "Test User",
          id: "10",
          location: "fdsf",
          avatar:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          phone: "sdfdfdfdsf",
          createdAt: "dfsf",
          updatedAt: "gksfngkf",
        },
      },
    };
  },
  toggeFavorite(body) {
    return {
      data: { saved: !body.seved, ...body },
    };
  },
  fetchLatest() {
    return axios.get("api/products/latest");
  },
  getById(id) {
    // return axios.get(`api/products/${id}`);
    return {
      data: {
        id,
        ownerId: "10",
        title: body.title,
        description: body.description,
        photos: null,
        location: body.location,
        price: body.price,
        saved: false,
        createdAt: `${Date.now()}`,
        updatedAt: `${Date.now()}`,
        owner: {
          email: "testuser@gamil.com",
          fullName: "Test User",
          id: "10",
          location: "fdsf",
          avatar: "dffdsffdsf",
          phone: "sdfdfdfdsf",
          createdAt: "dfsf",
          updatedAt: "gksfngkf",
        },
      },
    };
  },
  byUserId(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            list: [
              {
                id: Date.now(),
                ownerId: "10",
                title: "Item 1",
                description: "Description for item",
                photos: [
                  "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
                ],
                location: "location 1",
                price: 11,
                saved: false,
                createdAt: `${Date.now()}`,
                updatedAt: `${Date.now()}`,
                owner: {
                  email: "testuser@gamil.com",
                  fullName: "Test User",
                  id: "10",
                  location: "fdsf",
                  avatar:
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                  phone: "sdfdfdfdsf",
                  createdAt: "dfsf",
                  updatedAt: "gksfngkf",
                },
              },
              {
                id: Date.now(),
                ownerId: "10",
                title: "Item 2",
                description: "Description for item 2",
                photos: [
                  "https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg",
                ],
                location: "location 2",
                price: 22,
                saved: false,
                createdAt: `${Date.now()}`,
                updatedAt: `${Date.now()}`,
                owner: {
                  email: "testuser@gamil.com",
                  fullName: "Test User",
                  id: "10",
                  location: "fdsf",
                  avatar:
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                  phone: "sdfdfdfdsf",
                  createdAt: "dfsf",
                  updatedAt: "gksfngkf",
                },
              },
            ],
          },
        });
      }, 300);
    });
    // return axios.get(`api/users/${id}/products`);
  },
};

export const Users = {
  getByID(id) {
    return axios.get(`/api/users/${id}`);
  },
};

export const Chats = {
  createChat(id, message) {
    // return axios.post(`/api/products/${id}/createChat`, {
    //   message,
    // });
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({
    //       data: {
    //         id: 1323,
    //         productId: 3423,
    //         ownerId: 4634,
    //         createdAt: 5784257,
    //         updatedAt: 574875,
    //         message: {
    //           id: types.identifier,
    //           chatId: types.number,
    //           ownerId: types.number,
    //           text: types.string,
    //           read: types.boolean,
    //           createdAt: types.number,
    //           updatedAt: types.number,
    //         },
    //         product: {
    //           id: types.identifierNumber,
    //           ownerId: types.string,
    //           title: types.string,
    //           description: types.maybeNull(types.string),
    //           photos: types.maybeNull(types.array(types.string)),
    //           location: types.string,
    //           price: types.number,
    //           saved: false,
    //           createdAt: types.string,
    //           updatedAt: types.string,
    //           owner: types.maybe(types.reference(UserModel)),
    //           toogleFavorite: asyncModel(toogleFavorite),
    //           createChat: asyncModel(createChat, false),
    //         },
    //         user: {
    //           id: types.identifier,
    //           fullName: types.string,
    //           location: types.maybeNull(types.string),
    //           avatar: types.maybeNull(types.string),
    //           phone: types.maybeNull(types.string),
    //           createdAt: types.string,
    //           updatedAt: types.string,
    //           email: types.maybe(types.string),
    //           ownProducts: types.optional(OwnProductStore, {}),
    //         },
    //       },
    //     });
    //   }, 300);
    // });
  },
};
