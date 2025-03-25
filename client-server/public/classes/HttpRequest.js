class HTTPRequest {
  static get(url, params = {}) {
    return HTTPRequest.request('GET', url, params);
  }

  static delete(url, params = {}) {
    return HTTPRequest.request('DELETE', url, params);
  }

  static put(url, params = {}) {
    return HTTPRequest.request('PUT', url, params);
  }

  static post(url, params = {}) {
    return HTTPRequest.request('POST', url, params);
  }

  static request(method, url, params = {}) {
    return new Promise((resolve, reject) => {
      let ajax = new XMLHttpRequest();

      ajax.open(method.toUpperCase(), url);

      ajax.onerror = (e) => {
        reject(e);
      };

      ajax.onload = (event) => {
        let obj = {};

        try {
          obj = JSON.parse(ajax.responseText);
        } catch (e) {
          reject(e);

          console.log(e);
        }

        resolve(obj);
      };

      ajax.setRequestHeader('Content-Type', 'application/json');

      ajax.send(JSON.stringify(params));
    });
  }
}
