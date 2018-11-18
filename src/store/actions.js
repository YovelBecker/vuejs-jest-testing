// @ts-check

import userService from '../services/userService'

export default {
  /**
   * @param  {any} commit
   * @param {import('../services/userService').LoginData} data
   */
  async authenticate({ commit }, { username, password }) {
    try {
      var authenticated = await userService.login({
        username, password
      })
      
      commit("SET_AUTHENTICATED", authenticated)
      return authenticated
    } catch (e) {
      console.log(e)
      throw Error("API Error occurred.")
    }
  }
}
