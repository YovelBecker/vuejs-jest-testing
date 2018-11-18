export default {
    /**
     * @param  {String} route
     * @param  {Object=} config
     */
    get: (route, config) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true)    
            }, 1000);
        })
    },
    /**
     * @param  {String} route
     * @param  {Object} data
     * @param  {Object=} config
     */
    post: (route, data, config) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true)    
            }, 1000);
        })
    }
}