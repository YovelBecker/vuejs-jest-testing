import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import userService from '../services/userService'

jest.mock('../services/userService');

describe('Store::AuthModule', () => {

  describe('mutations', () => {

    beforeEach(() => {
    });

    it('should set authenticated to true ', () => {
      expect.assertions(1);

      const state = {authenticated: true}
      store.mutations.SET_AUTHENTICATED(store.state, true)
      expect(state.authenticated).toBeTruthy()
    })
  })

  describe('actions', () => {

    let $store
    
    beforeEach(() => {
      Vue.use(Vuex)
      $store = new Vuex.Store(store)
    });

    test('should update authenticated to true when user loggedin successfully', async () => {
      expect.assertions(2);

      userService.login.mockResolvedValue(true);
      const user = {
        username: 'user', 
        password: 'pass'
      }
      
      await $store.dispatch('authenticate', user)
      expect($store.state.authenticated).toBeTruthy()
      expect(userService.login).toBeCalled();
    })
  })
})