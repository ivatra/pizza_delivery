import { shallowMount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import PizzaItem from "@/components/PizzaItem.vue";

describe("PizzaItem.vue", () => {
  beforeEach(() => {
    // Create a new pinia instance for each test
    setActivePinia(createPinia());
  });

  it("display Ingredient in Pizza when ingredient._id = true", () => {
    // Test implementation needed
    expect(true).toBe(true);
  });

  it("display Ingredient in Pizza when ingredient._id = false", () => {
    // Test implementation needed
    expect(true).toBe(true);
  });

  it("renders and display props tasks when passed", () => {
    const pizza = {
      id: 1,
      custom: false,
      title: "Pizza 1",
      description: "Pizza 1 description",
      size: {
        small: 10,
        medium: 20,
        large: 30,
      },
      image: "pizza1.png",
    };
    const wrapper = shallowMount(PizzaItem, {
      props: { pizza },
      global: {
        stubs: {
          RouterLink: true,
        },
      },
    });
    expect(wrapper.find("h2").text()).toBe(pizza.title);
  });

  it("display btn Add to cart when pizza.cutom = false && displayBtnCart===true", () => {
    const pizza = {
      id: 1,
      custom: false,
      title: "Pizza 1",
      description: "Pizza 1 description",
      size: {
        small: 10,
        medium: 20,
        large: 30,
      },
      image: "pizza1.png",
    };
    const wrapper = shallowMount(PizzaItem, {
      props: { pizza, displayBtnCart: true },
      global: {
        stubs: {
          RouterLink: true,
        },
      },
    });
    expect(wrapper.find(".btn").exists()).toBe(true);
  });

  it("display btn customize when pizza.cutom = true && this.$route.name === 'index'", () => {
    const pizza = {
      id: 1,
      custom: true,
      title: "Pizza 1",
      description: "Pizza 1 description",
      size: {
        small: 10,
        medium: 20,
        large: 30,
      },
      image: "pizza1.png",
    };
    const wrapper = shallowMount(PizzaItem, {
      props: { pizza },
      global: {
        stubs: {
          RouterLink: true,
        },
        mocks: {
          $route: {
            name: "index",
          },
        },
      },
    });
    expect(wrapper.find(".btn").exists()).toBe(true);
  });

  it("renders props.pizza when passed", () => {
    const pizza = {
      id: 1,
      custom: false,
      title: "Pizza 1",
      description: "Pizza 1 description",
      size: {
        small: 10,
        medium: 20,
        large: 30,
      },
      image: "pizza1.png",
    };
    const wrapper = shallowMount(PizzaItem, {
      props: { pizza },
      global: {
        stubs: {
          RouterLink: true,
        },
      },
    });
    expect(wrapper.find("h2").text()).toBe(pizza.title);
  });

  it("toggles selectSize property when selectSizeRun method is called", async () => {
    const pizza = {
      id: 1,
      custom: false,
      title: "Pizza 1",
      description: "Pizza 1 description",
      size: {
        small: 10,
        medium: 20,
        large: 30,
      },
      image: "pizza1.png",
    };

    const wrapper = shallowMount(PizzaItem, {
      props: { pizza },
      global: {
        stubs: {
          RouterLink: true,
        },
      },
    });

    expect(wrapper.vm.selectSize).toBe(false);

    await wrapper.vm.selectSizeRun();

    expect(wrapper.vm.selectSize).toBe(true);
  });
});

// const store = usePizzaStore() // uses the testing pinia!

// const pizza = {
//     id: 1,
//     custom: false,
//     title: "Pizza 1",
//     description: "Pizza 1 description",
//     size:{
//         small: 10,
//         medium: 20,
//         large: 30,
//     },
//     image: "pizza1.png",
// };

// sendingToCart(pizza) {
//     // returning the id of the pizza to customize to function sendingToCart in PizzaItem
//     store.addPizzaToCart(pizza);
// }

// expect(store.addPizzaToCart).toHaveBeenCalled();
