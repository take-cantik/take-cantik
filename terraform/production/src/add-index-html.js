function handler(event) {
  const request = event.request;
  const uri = request.uri;

  // Check whether the URI is missing a file name.
  if (uri.endsWith("/")) {
    request.uri += "index.html";
  }
  // Check whether the URI is missing a file extension.
  else if (!uri.includes(".")) {
    const response = {
      statusCode: 308,
      statusDescription: "Found",
      headers: {
        location: {
          value: (request.uri += "/"),
        },
      },
    };

    return response;
  }

  return request;
}
