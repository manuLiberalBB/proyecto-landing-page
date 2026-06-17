export function mapContentfulEntriesToProducts(data) {
  if (!data?.items?.length) return [];

  const assetsById = new Map();
  for (const asset of data.includes?.Asset ?? []) {
    assetsById.set(asset.sys.id, asset);
  }

  return data.items.map((item) => {
    const f = item.fields ?? {};
    let imageUrl = "";
    const imageRef = f.image?.sys?.id;

    if (imageRef) {
      const fileUrl = assetsById.get(imageRef)?.fields?.file?.url;
      if (fileUrl) {
        imageUrl = fileUrl.startsWith("//") ? `https:${fileUrl}` : fileUrl;
      }
    }

    const price =
      typeof f.price === "number"
        ? `$${f.price.toLocaleString("es-AR")}`
        : String(f.price ?? "");

    return {
      id: item.sys?.id,
      name: f.name ?? "",
      category: f.category ?? "",
      price,
      image: imageUrl,
      badge: f.badge ?? "",
    };
  });
}

export function buildUrlContentful(spaceId) {
  const url = new URL(
    `https://preview.contentful.com/spaces/${spaceId}/entries`,
  );
  url.searchParams.set("content_type", "featuredProducts");
  url.searchParams.set("cursor", "true");
  url.searchParams.set("include", "10");
  return url;
}
