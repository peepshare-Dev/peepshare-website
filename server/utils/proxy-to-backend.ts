import {
  createError,
  getRequestURL,
  proxyRequest,
  type H3Event,
} from "h3";

export function proxyToBackend(event: H3Event) {
  const { apiBaseUrl } = useRuntimeConfig(event).public;

  if (!apiBaseUrl) {
    throw createError({
      statusCode: 500,
      statusMessage: "Backend API URL is not configured",
    });
  }

  const requestUrl = getRequestURL(event);
  const targetUrl = new URL(event.path, `${apiBaseUrl.replace(/\/+$/, "")}/`);

  if (targetUrl.origin === requestUrl.origin) {
    throw createError({
      statusCode: 500,
      statusMessage: "Backend API URL must not point to the frontend origin",
    });
  }

  return proxyRequest(event, targetUrl.toString());
}
