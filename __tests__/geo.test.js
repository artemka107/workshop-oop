import createGeo from '../src';

test('getGeo', async () => {
  const expected = 'expected result';

  const mockHttpModule = {
    get: jest.fn().mockResolvedValue({ data: expected }),
  };

  const getGeo = createGeo(mockHttpModule);

  const result = await getGeo('some test ip');
  expect(result).toBe(expected);
});

test('getGeo with errors', async () => {
  const mockHttpModule = {
    get: jest.fn().mockResolvedValue({ data: { status: 'fail' } }),
  };

  const getGeo = createGeo(mockHttpModule);

  await expect(getGeo('some test ip')).rejects.toThrow();
});
