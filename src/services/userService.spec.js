import httpService from './httpService'
import userService from './userService'

jest.mock('./httpService');

describe('UserService', () => {

  beforeEach(() => {
    httpService.post.mockReset();
    // httpService.post.mockClear();
  });

  test('should authenticate successfully', async () => {
    expect.assertions(2);

    const httpResp = true;
    httpService.post.mockResolvedValue(httpResp);

    const res = await userService.login({username: "mse", password: "sk"})
    expect(res).toBe(true)
    expect(httpService.post).toBeCalled();
  })

  test('should reset mock (httpService.post) done successfully', async () => {
    expect.assertions(2);

    // ignore these two lines it you use mockClear
    const httpResp = true;
    httpService.post.mockResolvedValue(httpResp);

    const res = await userService.login({username: "mse", password: "sk"})
    expect(res).toBe(true)
    expect(httpService.post).toHaveBeenCalledTimes(1);
  })

})