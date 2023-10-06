import { shallowMount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import IngredientItem from "@/components/IngredientItem.vue";

describe("IngredientItem.vue", () => {
  beforeEach(() => {
    // Create a new pinia instance for each test
    setActivePinia(createPinia());
  });

  it("renders props when passed", () => {
    const wrapper = shallowMount(IngredientItem, {
      props: {
        ingredient: {
          _id: "64e903d5752a93342434fcc6",
          title: "Tomato",
          price: 1.99,
          image: "/img/tomatos.avif",
        },
      },
      global: {
        mocks: {
          $route: {
            params: { id: "1" },
          },
        },
      },
    });
    expect(wrapper.find("h3").text()).toBe("Tomato");
  });
});
