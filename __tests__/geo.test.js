import Geo from '../src';

test('getGeo', async () => {
  const expected = 'expected result';

  const mockHttpModule = {
    get: jest.fn().mockResolvedValue({ data: expected }),
  };

  const geo = new Geo(mockHttpModule);

  const result = await geo.get('some test ip');
  expect(result).toBe(expected);
});

test('getGeo with errors', async () => {
  const mockHttpModule = {
    get: jest.fn().mockResolvedValue({ data: { status: 'fail' } }),
  };

  const geo = new Geo(mockHttpModule);

  await expect(geo.get('some test ip')).rejects.toThrow();
});
