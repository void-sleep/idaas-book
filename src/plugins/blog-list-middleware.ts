import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

function isBlogListPage(id: string) {
  return id === 'blog' || /^blog\/\d+$/.test(id);
}

export const onRequest = defineRouteMiddleware(({ locals }) => {
  if (!isBlogListPage(locals.starlightRoute.id)) return;

  locals.starlightRoute.hasSidebar = false;
  locals.starlightRoute.sidebar = [];
  locals.starlightRoute.toc = undefined;
});
