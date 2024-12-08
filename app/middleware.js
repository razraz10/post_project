export { default } from 'next-auth/middleware';

export const config = { matcher: ['/posts/new', '/posts/:id/edit', '/api/path*'] }