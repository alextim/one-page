const sendData = async (data) => {
  const endpoint = 'https://us-central1-contact-form-test-ab6ae.cloudfunctions.net/contact';
  const params = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  };

  const res = await fetch(endpoint, params);
  if (res.ok && res.status < 300) {
    // console.warn('Success');
    return true;
  }

  console.warn(res);

  const text = await res.text();
  console.warn(text);
  if (!text) {
    try {
      const json = await res.json();
      console.warn(json);
      // eslint-disable-next-line no-empty
    } catch {}
  }

  let errText = '';
  switch (res.status) {
    case 400:
      errText = 'Bad data';
      break;
    case 403:
      errText = 'Spam';
      break;
    case 405:
      errText = 'Method Not Allowed';
      break;
    default:
      errText = res.statusText ? res.statusText : text || 'Network error';
      break;
  }

  throw new Error(`${res.status}: ${errText}`);
};

export default sendData;
