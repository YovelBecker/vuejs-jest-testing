import Vue from 'vue'
import { mount, shallowMount } from '@vue/test-utils';
import LoginCmp from './LoginCmp.vue'

describe('LoginCmp', () => {
  let $mounted;
  beforeEach(() => {
    $mounted = new Vue(LoginCmp).$mount()
  })

  // it('should set authenticated to true ', () => {
  //   expect.assertions(1);
  //   let $html = $mounted.$el.outerHTML


  //   console.log($html)
  //   expect($html).toMatchSnapshot()
  // })

  describe('Login btn', () => {
    it('should have disabled attribute login btn', () => {
      expect.assertions(2);
      const wrapper = mount(LoginCmp);
  
      const btnWrapper = wrapper.find('button')
      expect(btnWrapper.classes('is-block')).toBe(true)
      expect(btnWrapper.attributes("disabled")).toBe("disabled")
    })

    it('should trigger onSubmit method when he is enabled', () => {
      expect.assertions(3);
      const onSubmitMock = jest.fn()
      const wrapper = shallowMount(LoginCmp, { // shallowMount - no need to mount the children cmps
        computed: {
          isSubmitAllowed() {
            return true;
          }
        },
        methods: {
          onSubmit: onSubmitMock
        }
      });
  
      const btnWrapper = wrapper.find('button')
      expect(btnWrapper.classes('is-block')).toBe(true)
      expect(btnWrapper.attributes("disabled")).toBe(undefined)
      
      wrapper.find("form").trigger("submit.prevent")
      expect(onSubmitMock).toHaveBeenCalled()
    })
  })

})