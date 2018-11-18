// @ts-check

import httpService from './httpService'

/**
   * @typedef {Object} LoginData
   * @property  {string} username
   * @property  {string} password
   */

export default {
    /**
     * @param  {LoginData} data
     */
    login: (data) => {
        return httpService.post('/api/login', data)
    },
    /**
     */
    logout: () => {
        return httpService.post('/api/logout', {})
    }
}