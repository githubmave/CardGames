test('list wombles', () => {
    const expected = 'WOMBLES!'
    return request(server)
      .get('/')
      .then((res) => {
        return expect(res.text).toBe(expected)
      })
  })
  