import { rest } from 'msw';

export const handlers = [
  rest.get('/api/user/1', (req, res, ctx) => {
    return res(ctx.json({ name: 'Alice' }));
  })
];
