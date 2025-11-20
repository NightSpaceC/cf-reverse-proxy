export async function onRequest<P extends string, Data>(context: EventContext<Env, P, Data>) {
    const request = context.request;
    const url = new URL(request.url);
    const new_url = new URL(url.pathname + url.search, context.env.BASE_URL);
    const new_request = new Request(new_url, {
        method: request.method,
        headers: request.headers,
        body: request.body,
    });
    return await fetch(new_request);
}