import React, { useState, useEffect } from "react";
import { PrimaryButton } from "../Buttons";
import { Result } from "../result/Result";
import "./search.css";

export const Search = () => {
  const [contractAddress, setContractAddress] = useState("");
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    requestContract();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestContract() {
    setContractAddress();
    const res = await fetch(
      `https://api.opensea.io/api/v1/asset_contract/${contractAddress}`
    );

    const json = await res.json();

    setCollection(json.collection);
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
            type="text"
            id="contract"
            value={contractAddress}
            onChange={(event) => setContractAddress(event.target.value)}
            placeholder="Contract Address"
          />
        </label>

        <PrimaryButton>Search</PrimaryButton>
      </form>
      <Result collection={collection} />
    </div>
  );
};
