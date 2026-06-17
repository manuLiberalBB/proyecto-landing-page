export async function getProductosFromCMSync(url, accessToken) {
  try {
    const cfRes = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const body = await cfRes.json();

    if (!cfRes.ok) {
      return res.status(cfRes.status).json(body);
    }
    return body;
  } catch (err) {
    throw new Error("Error al obtener los productos");
  }
};
