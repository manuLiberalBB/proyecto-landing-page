import { getProductosFromCMSync } from "../services/contentfulServices.js";
import { buildUrlContentful, mapContentfulEntriesToProducts } from "../utils/contentful.js";
import { cache } from "../config/cache.js";

export async function getProducts(req, res) {
  try {
    const contentType = req.query.contentType;
    const cachedProducts = cache.get(contentType);
    if (cachedProducts) {
      return res.status(200).json(cachedProducts);
    }

    const spaceId = process.env.SPACE_ID;
    const accessToken = process.env.PREVIEW_ACCESS_TOKEN;

    if (!spaceId || !accessToken) {
      return res
        .status(500)
        .json({ error: "Configura SPACE_ID y PREVIEW_ACCESS_TOKEN en .env" });
    }

    const url = buildUrlContentful(spaceId, contentType);

    const response = await getProductosFromCMSync(url, accessToken);
    const mappedProducts = mapContentfulEntriesToProducts(response);
    cache.set(contentType, mappedProducts);
    return res.status(200).json(mappedProducts);
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener los productos" });
  }
}
