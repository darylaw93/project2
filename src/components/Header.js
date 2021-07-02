useEffect(() => {
    setStatus("pending");
    fetch(`${coindeskURL}${code}`, {
      mode: "cors",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Bad Response from Server");
      })
      .then((data) => {
        setStatus("resolved");
        setRate(data.bpi[code].rate);
      })
      .catch((error) => {
        setRate(error);
        setStatus("error");
      });
  }, [code]);
  
  const showRate = (status) => {
    if (status === "idle") {
      return "Please enter a currency";
    }
  
    if (status == "pending") {
      return "Loading...";
    }
  
    if (status === "resolved") {
      return rate;
    }
  
    if (status === "error") {
      return rate;
    }
  };