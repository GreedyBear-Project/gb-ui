import React from "react";
import axios from "axios";
import { Button } from "reactstrap";
import { MdClear } from "react-icons/md";

import Select from "./Select";
import Loader from "../containers/Loader";

export default function AsyncSelect({
  url,
  selectorFn = (x) => x,
  mapFn = (x) => ({ label: x.id, value: x.id, }),
  onClear = undefined,
  ...selectProps
}) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    setLoading(true);
    setError(null);

    axios
      .get(url, { signal: controller.signal, })
      .then((response) => {
        if (!isMounted)
          return;
        setData(response.data);
      })
      .catch((requestError) => {
        if (!isMounted)
          return;

        if (requestError?.code === "ERR_CANCELED")
          return;

        setError(requestError);
      })
      .finally(() => {
        if (isMounted)
          setLoading(false);
      });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url]);

  const choices = React.useMemo(
    () => (data ? selectorFn(data).map(mapFn) : []),
    [data, selectorFn, mapFn]
  );

  return (
    <Loader
      size="lg"
      loading={loading}
      error={error}
      render={() => (
        <>
          <Select choices={choices} {...selectProps} />
          {onClear && (
            <Button className="float-end btn-sm" onClick={onClear}>
              <MdClear />
            </Button>
          )}
        </>
      )}
    />
  );
}

