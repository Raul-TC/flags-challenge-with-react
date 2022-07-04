export function requestFetch(props) {
  let { url, cbSuccess } = props;
  fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))

    .catch((err) => {
      console.info(err);
    });
}
