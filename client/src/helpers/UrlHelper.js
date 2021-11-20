function convertQueryToObject(q) {
  if (!q) {
    return null;
  }

  var search = q;
  return JSON.parse(
    '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
    function (key, value) {
      return key === "" ? value : decodeURIComponent(value);
    }
  );
}

export default function getQueryParamValue(param) {
  const search = convertQueryToObject(window.location.search.substring(1));

  if (!search) {
    return null;
  }

  return search[param];
}
