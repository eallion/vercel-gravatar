export const config = {
    runtime: "experimental-edge",
};

export default function (req) {
    return fetchAndApply(req);
}

const upstream = "www.gravatar.com";

async function fetchAndApply(request) {
    let response = null;
    let url = new URL(request.url);

    url.host = upstream;
    let method = request.method;
    let request_headers = request.headers;
    let new_request_headers = new Headers(request_headers);
    new_request_headers.set("Host", upstream);
    new_request_headers.set("Referer", url.href);
    let original_response = await fetch(url.href, {
        method: method,
        headers: new_request_headers,
    });

    let original_response_clone = original_response.clone();
    let original_text = null;
    let response_headers = original_response.headers;
    let new_response_headers = new Headers(response_headers);
    let status = original_response.status;

    new_response_headers.set("access-control-allow-origin", "https://www.eallion.com");
    new_response_headers.set("access-control-allow-origin", "https://eallion.com");
    new_response_headers.set(
        "Cache-Control",
        "max-age=600, s-maxage=2592000, stale-while-revalidate"
    );
    new_response_headers.delete("link");

    original_text = original_response_clone.body;

    response = new Response(original_text, {
        status,
        headers: new_response_headers,
    });

    return response;
}