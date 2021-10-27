import { mount } from "@vue/test-utils";
import KbTodoItem from "@/components/KbTodoItem.vue";

const message = "sample todo item";
const muted = ".text-muted";

describe("KbTodoItem.vue", () => {
  it("renders props.message when passed", () => {
    const wrapper = mount(KbTodoItem, {
      propsData: { message, value: false },
    });
    expect(wrapper.find(muted).exists()).toBe(false);
    expect(wrapper.text()).toMatch(message);
  });

  it("grays out when the task is done", () => {
    const wrapper = mount(KbTodoItem, {
      propsData: { message, value: true },
    });
    expect(wrapper.find(muted).exists()).toBe(true);
    expect(wrapper.find(muted).text()).toMatch(message);
  });

  // Test that emits are forwarded
  // See: https://vue-test-utils.vuejs.org/api/wrapper/emitted.html
  it("emits when the task is checked", async () => {
    const wrapper = mount(KbTodoItem, {
      propsData: { message, value: true },
    });
    const checkbox = wrapper.find("input[type=checkbox]");
    await checkbox.trigger("click");
    await checkbox.trigger("click");
    await checkbox.trigger("click");

    const emitted = wrapper.emitted().input;
    expect(emitted?.length).toBe(3);
    expect(emitted?.[0]).toEqual([false]);
    expect(emitted?.[1]).toEqual([true]);
    expect(emitted?.[2]).toEqual([false]);
  });
});
