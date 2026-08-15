export default {
  async fetch(request, env) {
    let response = await env.ASSETS.fetch(request);

    if (response.status === 404 && request.method === "GET") {
      const url = new URL(request.url);
      const lastSegment = url.pathname.split("/").pop();

      if (!lastSegment?.includes(".")) {
        url.pathname = `${url.pathname.replace(/\/$/, "")}/index.html`;
        response = await env.ASSETS.fetch(new Request(url, request));
      }
    }

    if (!response.headers.get("content-type")?.includes("text/html")) {
      return response;
    }

    const headers = new Headers(response.headers);
    headers.delete("content-length");

    const origin = new URL(request.url).origin;
    const html = (await response.text()).replaceAll("__SITE_ORIGIN__", origin);

    return new Response(html, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
