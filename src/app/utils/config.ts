const config = {
  api: "https://admin.envybeauty.com.au",
};

async function fetchProps(location: string) {
  const request = await fetch(
    `${config.api}/api/${location}?populate=*&pagination[pageSize]=999`,
    {
      next: { revalidate: 3600 },
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI}`,
      },
    }
  );
  const response = await request.json();

  return response;
}

export { fetchProps, config as default };
