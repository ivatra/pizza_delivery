import TopBarCart from "@/components/TopBarCart.vue";
import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";

describe("TopBarCart.vue", () => {
  it("check if component is rendered", () => {
    const wrapper = mount(TopBarCart, {
      global: {
        plugins: [createTestingPinia()],
        stubs: {
          RouterLink: true,
        },
      },
    });
    expect(wrapper.getComponent({ name: "TopBarCart" }).exists()).toBeTruthy();
  });
});
