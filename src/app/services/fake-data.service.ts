import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {
  private restaurants: any = [];
  constructor() {
    this.restaurants = this.getData();
   }

  getRestaurant(restaurantId: string) {
    return this.restaurants.find((r) =>  r.id == restaurantId)
  }

  getData(): any[] {
    return [
      {
        id: 1,
        name: 'Home Made Indian Food',
        reviewsCount: 6,
        qualification: 5,
        openingHour: 10,
        backgroundImage: '',
        avatarImage: '',
        image: 'assets/ico/homemade.jpg',
        categories: [
          {
            id: 1,
            title: "Main",
            total: 2,
          },
          // {
          //   id: 2,
          //   title: "Nasi",
          //   total: 10,
          // },
          // {
          //   id: 3,
          //   title: "Wraps",
          //   total: 23,
          // },
          // {
          //   id: 4,
          //   title: "Burgers",
          //   total: 43,
          // },
          // {
          //   id: 5,
          //   title: "Snacks",
          //   total: 43,
          // },
          // {
          //   id: 6,
          //   title: "Drinks",
          //   total: 65,
          // },
        ],
        plates: [
          {
            id: 1,
            categoryId: 1,
            name: "Hara Bhara kabab",
            description: "Hara Bhara kabab 1pcs",
            price: 2.00,
            count: 0,            
            image:
              "assets/images/hara-bhara-kabab.jpg",
          },
          {
            id: 2,
            categoryId: 2,
            name: "Buff Vada",
            description: "Buff Vada 1pcs",
            price: 2.00,
            count: 0,
            image:
              "assets/images/buff-vada.jpg",
          },
          {
            id: 3,
            categoryId: 3,
            name: "Aloo Vada",
            description: "this is just example",
            price: 1.5,
            count: 0,
            image:
              "assets/images/aloo-bonda.jpg",
          },
          {
            id: 4,
            categoryId: 4,
            name: "Veg Biryani",
            description: "this is just example",
            price: 13.44,
            count: 0,
            image: "assets/images/vegbiryani.jpg",
          },
          {
            id: 5,
            categoryId: 1,
            name: "Puran poli",
            description: "Puran poli 2pcs",
            price: 6.00,
            count: 0,
            image:
              "assets/images/puran-poli.jpg",
          },
          {
            id: 6,
            categoryId: 4,
            name: "Dahi Vada",
            description: "Dahivada 1plate",
            price: 10.00,
            count: 0,
            image:
              "assets/images/Dahivada.jpeg",
          },
          {
            id: 7,
            categoryId: 3,
            name: "Sev tameta nu shaak",
            description: "this is just example",
            price: 9.44,
            count: 0,
            image:
              "assets/images/sev-tameta-nu-shaak-recipe-1.jpg",
          },
          {
            id: 8,
            categoryId: 4,
            name: "Cheese Corn Tikki",
            description: "Cheese Corn Tikki 2pcs",
            price: 6.00,
            count: 0,
            image: "assets/images/CheeseCornTikki.jpg",
          },
          {
            id: 9,
            categoryId: 4,
            name: "Paneer Tikki",
            description: "Paneer Tikki 2pcs",
            price: 6.00,
            count: 0,
            image: "assets/images/Paneer_Tikkis.jpg",
          },
          {
            id: 10,
            categoryId: 4,
            name: "Aloo Tikki",
            description: "Aloo Tikki 1pcs",
            price: 1.50,
            count: 0,
            image: "assets/images/Aloo-Tikki.jpg",
          },
          {
            id: 11,
            categoryId: 4,
            name: "Cheese Spring Roll",
            description: "Cheese Spring Roll 1pcs",
            price: 2.00,
            count: 0,
            image: "assets/images/Chinese-Spring-Roll.jpg",
          },
          {
            id: 12,
            categoryId: 4,
            name: "Khajoor Roll",
            description: "Khajoor Roll",
            price: 1.50,
            count: 0,
            image: "assets/images/KhajoorRoll.jpg",
          },
          {
            id: 13,
            categoryId: 4,
            name: "Aloo sabji",
            description: "Aloo sabji",
            price: 5.00,
            count: 0,
            image: "assets/images/1.jpeg",
          },
          {
            id: 14,
            categoryId: 4,
            name: "Methi thepla",
            description: "Methi thepla 1pcs.",
            price: 2.00,
            count: 0,
            image: "assets/images/2.jpeg",
          },
          {
            id: 15,
            categoryId: 4,
            name: "Pav Bhaji",
            description: "Pav Bhaji 2pcs.",
            price: 8.00,
            count: 0,
            image: "assets/images/3.jpeg",
          },
          {
            id: 16,
            categoryId: 4,
            name: "Bitroot Paratha",
            description: "Bitroot Paratha 1pcs.",
            price: 2.50,
            count: 0,
            image: "assets/images/4.jpeg",
          },
          {
            id: 17,
            categoryId: 4,
            name: "Carrot halva",
            description: "Carrot halva",
            price: 5.00,
            count: 0,
            image: "assets/images/5.jpeg",
          },
          {
            id: 18,
            categoryId: 4,
            name: "Beetroot Halwa",
            description: "Beetroot Halwa 500gm",
            price: 40.00,
            count: 0,
            image: "assets/images/6.jpeg",
          },
          {
            id: 19,
            categoryId: 4,
            name: "Vada pav",
            description: "Vada pav 1pcs",
            price: 7.00,
            count: 0,
            image: "assets/images/7.jpeg",
          },
          {
            id: 20,
            categoryId: 4,
            name: "Puri",
            description: "Puri 500gm.",
            price: 20.00,
            count: 0,
            image: "assets/images/8.jpeg",
          },
          {
            id: 21,
            categoryId: 4,
            name: "dabeli",
            description: "dabeli 1pcs",
            price: 7.00,
            count: 0,
            image: "assets/images/9.jpeg",
          },
          {
            id: 22,
            categoryId: 4,
            name: "Crispi Bhakhri",
            description: "Crispi Bhakhri 1pcs",
            price: 2.00,
            count: 0,
            image: "assets/images/10.jpeg",
          },
          {
            id: 23,
            categoryId: 4,
            name: "Ragda Petis",
            description: "Ragda Petis 1pcs",
            price: 8.00,
            count: 0,
            image: "assets/images/11.jpeg",
          },
          {
            id: 24,
            categoryId: 4,
            name: "Gulab jamun",
            description: "Gulab jamun 3ps",
            price: 5.00,
            count: 0,
            image: "assets/images/12.jpeg",
          },
          {
            id: 25,
            categoryId: 4,
            name: "Carrot Paratha",
            description: "Carrot Paratha 1pcs",
            price: 2.00,
            count: 0,
            image: "assets/images/13.jpeg",
          },
          {
            id: 26,
            categoryId: 4,
            name: "Carrot halva",
            description: "Carrot halva RM 5.",
            price: 5.00,
            count: 0,
            image: "assets/images/14.jpeg",
          },
          {
            id: 27,
            categoryId: 4,
            name: "Poha Chevda",
            description: "Poha Chevda 500gm.",
            price: 30.00,
            count: 0,
            image: "assets/images/16.jpeg",
          },
          {
            id: 28,
            categoryId: 4,
            name: "Methi Papad",
            description: "Methi Papad 1pcs.",
            price: 10.00,
            count: 0,
            image: "assets/images/17.jpeg",
          },
          {
            id: 29,
            categoryId: 4,
            name: "Chili Pokoda",
            description: "Chili Pokoda 2 pcs.",
            price: 5.00,
            count: 0,
            image: "assets/images/18.jpeg",
          },
        ],
      },
      {
        id: 2,
        name: 'Burger King',
        reviewsCount: 3,
        qualification: 5,
        openingHour: 10,
        backgroundImage: '',
        avatarImage: '',
        image: 'http://1000marcas.net/wp-content/uploads/2019/12/Logo-Burger-King.png',
        categories: [
          {
            id: 1,
            title: "Main",
            active: true,
          },
          {
            id: 2,
            title: "Nasi",
          },
          {
            id: 3,
            title: "Past",
          },
          {
            id: 4,
            title: "Wraps",
          },
          {
            id: 5,
            title: "Burgers",
          },
          {
            id: 6,
            title: "Snacks",
          },
          {
            id: 7,
            title: "Drinks",
          },
        ],
        plates: [
          {
            id: 1,
            categoryId: 1,
            name: "Chiken Chops",
            description: "this is just example",
            price: 13.44,
            count: 0,
            image:
              "https://img2.freepng.es/20180707/fsc/kisspng-french-fries-schnitzel-vegetarian-cuisine-meat-cho-chicken-chop-5b40d5cd8b6ca5.2743027215309756935711.jpg",
          },
          {
            id: 1,
            categoryId: 2,
            name: "Nasi goreng indonesia",
            description: "this is just example",
            price: 10.44,
            count: 0,
            image:
              "https://upload.wikimedia.org/wikipedia/commons/4/49/Nasi_Goreng_Pete_Kambing.JPG",
          },
          {
            id: 1,
            categoryId: 3,
            name: "Wrap",
            description: "this is just example",
            price: 9.44,
            count: 0,
            image:
              "https://www.pngkit.com/png/detail/386-3868298_chicken-wrap-food-arrow-element-wrap.png",
          },
          {
            id: 1,
            categoryId: 4,
            name: "Burger",
            description: "this is just example",
            price: 13.44,
            count: 0,
            image: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a8.png",
          },
          {
            id: 1,
            categoryId: 1,
            name: "Chiken Chops",
            description: "this is just example",
            price: 13.44,
            count: 0,
            image:
              "https://img2.freepng.es/20180707/fsc/kisspng-french-fries-schnitzel-vegetarian-cuisine-meat-cho-chicken-chop-5b40d5cd8b6ca5.2743027215309756935711.jpg",
          },
          {
            id: 1,
            categoryId: 2,
            name: "Nasi goreng indonesia",
            description: "this is just example",
            price: 10.44,
            count: 0,
            image:
              "https://upload.wikimedia.org/wikipedia/commons/4/49/Nasi_Goreng_Pete_Kambing.JPG",
          },
          {
            id: 1,
            categoryId: 3,
            name: "Wrap",
            description: "this is just example",
            price: 9.44,
            count: 0,
            image:
              "https://www.pngkit.com/png/detail/386-3868298_chicken-wrap-food-arrow-element-wrap.png",
          },
          {
            id: 1,
            categoryId: 4,
            name: "Burger",
            description: "this is just example",
            price: 13.44,
            count: 0,
            image: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a8.png",
          },
        ],
      },
      {
        id: 3,
        name: 'Gatto Cafe',
        reviewsCount: 4,
        qualification: 5,
        openingHour: 10,
        backgroundImage: '',
        avatarImage: '',
        image: 'https://e7.pngegg.com/pngimages/726/694/png-clipart-cat-cafe-whiskers-cafe-catfe-creative-cat-logo-white-mammal.png',
        categories: [
          {
            id: 1,
            title: "Main",
            active: true,
          },
          {
            id: 2,
            title: "Nasi",
          },
          {
            id: 3,
            title: "Past",
          },
          {
            id: 4,
            title: "Wraps",
          },
          {
            id: 5,
            title: "Burgers",
          },
          {
            id: 6,
            title: "Snacks",
          },
          {
            id: 7,
            title: "Drinks",
          },
        ],
        plates: [
          {
            id: 1,
            categoryId: 1,
            name: "Chiken Chops",
            description: "this is just example",
            price: 13.44,
            image:
              "https://img2.freepng.es/20180707/fsc/kisspng-french-fries-schnitzel-vegetarian-cuisine-meat-cho-chicken-chop-5b40d5cd8b6ca5.2743027215309756935711.jpg",
          },
          {
            id: 1,
            categoryId: 2,
            name: "Nasi goreng indonesia",
            description: "this is just example",
            price: 10.44,
            image:
              "https://upload.wikimedia.org/wikipedia/commons/4/49/Nasi_Goreng_Pete_Kambing.JPG",
          },
          {
            id: 1,
            categoryId: 3,
            name: "Wrap",
            description: "this is just example",
            price: 9.44,
            image:
              "https://www.pngkit.com/png/detail/386-3868298_chicken-wrap-food-arrow-element-wrap.png",
          },
          {
            id: 1,
            categoryId: 4,
            name: "Burger",
            description: "this is just example",
            price: 13.44,
            image: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a8.png",
          },
          {
            id: 1,
            categoryId: 1,
            name: "Chiken Chops",
            description: "this is just example",
            price: 13.44,
            image:
              "https://img2.freepng.es/20180707/fsc/kisspng-french-fries-schnitzel-vegetarian-cuisine-meat-cho-chicken-chop-5b40d5cd8b6ca5.2743027215309756935711.jpg",
          },
          {
            id: 1,
            categoryId: 2,
            name: "Nasi goreng indonesia",
            description: "this is just example",
            price: 10.44,
            image:
              "https://upload.wikimedia.org/wikipedia/commons/4/49/Nasi_Goreng_Pete_Kambing.JPG",
          },
          {
            id: 1,
            categoryId: 3,
            name: "Wrap",
            description: "this is just example",
            price: 9.44,
            image:
              "https://www.pngkit.com/png/detail/386-3868298_chicken-wrap-food-arrow-element-wrap.png",
          },
          {
            id: 1,
            categoryId: 4,
            name: "Burger",
            description: "this is just example",
            price: 13.44,
            image: "hhttps://controlpublicidad.com/uploads/2019/11/fondue-burger-extra-081233.jpg",
          },
        ],
      },
      {
        id: 4,
        name: 'Groceries Store',
        reviewsCount: 4,
        qualification: 5,
        openingHour: 10,
        backgroundImage: '',
        avatarImage: '',
        image: 'https://e7.pngegg.com/pngimages/726/694/png-clipart-cat-cafe-whiskers-cafe-catfe-creative-cat-logo-white-mammal.png',
        categories: [
          {
            id: 1,
            title: "Main",
            active: true,
          },
          {
            id: 2,
            title: "Nasi",
          },
          {
            id: 3,
            title: "Past",
          },
          {
            id: 4,
            title: "Wraps",
          },
          {
            id: 5,
            title: "Burgers",
          },
          {
            id: 6,
            title: "Snacks",
          },
          {
            id: 7,
            title: "Drinks",
          },
        ],
        plates: [
          {
            id: 1,
            categoryId: 1,
            name: "Chiken Chops",
            description: "this is just example",
            price: 13.44,
            image:
              "https://img2.freepng.es/20180707/fsc/kisspng-french-fries-schnitzel-vegetarian-cuisine-meat-cho-chicken-chop-5b40d5cd8b6ca5.2743027215309756935711.jpg",
          },
          {
            id: 1,
            categoryId: 2,
            name: "Nasi goreng indonesia",
            description: "this is just example",
            price: 10.44,
            image:
              "https://upload.wikimedia.org/wikipedia/commons/4/49/Nasi_Goreng_Pete_Kambing.JPG",
          },
          {
            id: 1,
            categoryId: 3,
            name: "Wrap",
            description: "this is just example",
            price: 9.44,
            image:
              "https://www.pngkit.com/png/detail/386-3868298_chicken-wrap-food-arrow-element-wrap.png",
          },
          {
            id: 1,
            categoryId: 4,
            name: "Burger",
            description: "this is just example",
            price: 13.44,
            image: "https://controlpublicidad.com/uploads/2019/11/fondue-burger-extra-081233.jpg",
          },
          {
            id: 1,
            categoryId: 1,
            name: "Chiken Chops",
            description: "this is just example",
            price: 13.44,
            image:
              "https://img2.freepng.es/20180707/fsc/kisspng-french-fries-schnitzel-vegetarian-cuisine-meat-cho-chicken-chop-5b40d5cd8b6ca5.2743027215309756935711.jpg",
          },
          {
            id: 1,
            categoryId: 2,
            name: "Nasi goreng indonesia",
            description: "this is just example",
            price: 10.44,
            image:
              "https://upload.wikimedia.org/wikipedia/commons/4/49/Nasi_Goreng_Pete_Kambing.JPG",
          },
          {
            id: 1,
            categoryId: 3,
            name: "Wrap",
            description: "this is just example",
            price: 9.44,
            image:
              "https://www.pngkit.com/png/detail/386-3868298_chicken-wrap-food-arrow-element-wrap.png",
          },
          {
            id: 1,
            categoryId: 4,
            name: "Burger",
            description: "this is just example",
            price: 13.44,
            image: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c1a8.png",
          },
        ]
      }
    ];
  }
}
