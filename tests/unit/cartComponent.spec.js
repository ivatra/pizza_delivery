import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import CartComponent from "@/components/CartComponent.vue";

describe("CartComponent.vue", () => {
  it("renders the component", () => {
    const wrapper = mount(CartComponent, {
      global: {
        plugins: [createTestingPinia()],
        stubs: {
          PizzaItem: true,
          PreviewOrder: true,
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
