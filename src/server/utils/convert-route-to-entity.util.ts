const mapping: Record<string, string> = {
  admins: 'admin',
  customers: 'customer',
  providers: 'provider',
  songs: 'song',
  users: 'user',
  viewers: 'viewer',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
