import React, { useState, useCallback } from "react";
import { PrimaryButton } from "../Buttons";
import { Result } from "../result/Result";
import "./search.css";

export const Search = () => {
  const [contractAddress, setContractAddress] = useState("");
  const [collection, setCollection] = useState({});
  const [error, setError] = useState(false);

  const requestContract = useCallback(() => {
    getData(contractAddress);
  }, [contractAddress]);

  async function getData(contractAddress) {
    try {
      const res = await fetch(
        `https://api.opensea.io/api/v1/asset_contract/${contractAddress}`
      );

      const json = await res.json();
      console.log(json);
      setError(false);
      setCollection(json.collection);
    } catch (e) {
      setError(true);
      setCollection({});
    }
  }

  return (
    <div className="search">
      <h1>NFT Collection Viewer</h1>
      <p>To view an NFT collection, simply input the contract address below</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestContract();
        }}
      >
        <label htmlFor="contract-address">
          <input
            required
            type="text"
            id="contract"
            value={contractAddress}
            onChange={(event) => setContractAddress(event.target.value)}
            placeholder="Contract Address"
          />
        </label>

        <PrimaryButton>Search</PrimaryButton>
      </form>
      {error ? (
        <p style={{ color: "red" }}>ERROR: Invalid Contract Address</p>
      ) : (
        <Result collection={collection} />
      )}
    </div>
  );
};
