import { describe, it, expect, vi } from "vitest"; // It's important to import vi since I don't have `{globals: true}` set
import { mount } from "@vue/test-utils";
import OutputComponent from '../OutputComponent.vue';
import { createTestingPinia } from "@pinia/testing";
import { useCalculationStore } from "../../stores/calculation";


describe("Output", () => {
    it('shows the correct value', async () => {
        const wrapper = mount(OutputComponent, {
            global: {
                plugins: [createTestingPinia({
                    createSpy: vi.fn // Dont' forget about this
                })]
            }
        })

        const store = useCalculationStore()

        expect(wrapper.text()).toContain(0)
        store.pool++
        await wrapper.vm.$nextTick() // store.pool updates but the DOM doesn't, so this line is needed
        expect(wrapper.text()).toContain(store.pool)
    })
})