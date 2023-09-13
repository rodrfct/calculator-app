import { describe, it, expect, vi, beforeEach } from "vitest"; // It's important to import vi since I don't have `{globals: true}` set
import { mount } from "@vue/test-utils";
import InputComponent from '../InputComponent.vue';
import { createTestingPinia } from "@pinia/testing";
import { useCalculationStore } from "../../stores/calculation";

describe("Calculator works", () => {
    const wrapper = mount(InputComponent, {
        global: {
            plugins: [createTestingPinia({
                createSpy: vi.fn,
                stubActions: false // Important or it won't calculate
            })]
        }
    })

    const store = useCalculationStore()

    const two = wrapper.get('[data-value="2"]')
    const five = wrapper.get('[data-value="5"]')
    const point = wrapper.get('#point-btn')
    const plus = wrapper.get('#plus-btn')
    const multiply = wrapper.get('#mult-btn')
    const division = wrapper.get('#division-btn')
    const del = wrapper.get('#delete-btn')
    const equal = wrapper.get('#equal-btn')

    const reset = wrapper.get('#reset-btn')

    beforeEach(() => {
        reset.trigger('click')
    })

    it('sums correctly', () => {
        five.trigger('click')
        plus.trigger('click')
        two.trigger('click')
        equal.trigger('click')

        expect(store.pool).toBe(5 + 2)
    })

    it('multiplies correctly', () => {
        five.trigger('click')
        multiply.trigger('click')
        two.trigger('click')
        equal.trigger('click')

        expect(store.pool).toBe(5 * 2)
    })

    it('divides correctly', () => {
        five.trigger('click')
        division.trigger('click')
        two.trigger('click')
        equal.trigger('click')

        expect(store.pool).toBe(5 / 2)
    })

    it('handles decimals', () => {
        five.trigger('click')
        point.trigger('click')
        two.trigger('click')

        division.trigger('click')

        two.trigger('click')
        point.trigger('click')
        five.trigger('click')

        equal.trigger('click')

        expect(store.pool).toBe(5.2 / 2.5)
    })

    it('deletes inputs', () => {
        five.trigger('click')
        multiply.trigger('click')
        two.trigger('click')
        five.trigger('click')
        del.trigger('click')
        equal.trigger('click')

        expect(store.pool).toBe(5 * 2)
    })
})