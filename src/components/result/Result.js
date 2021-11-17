import React from "react";
import "./result.css";

export const Result = ({ collection }) => {
  if (collection) {
    return (
      <div className="collection">
        <img
          className="background-image"
          src={collection.banner_image_url}
          alt="banner"
        />
        <img className="avatar-image" src={collection.image_url} alt="avatar" />
        <div className="content">
          <h2>{collection.name}</h2>
          <p>{collection.description}</p>
        </div>
        <ul className="links">
          {collection.external_url ? (
            <li>
              <a
                href={collection.external_url}
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
            </li>
          ) : (
            ""
          )}

          {collection.discord_url ? (
            <li>
              <a href={collection.discord_url} target="_blank" rel="noreferrer">
                Discord
              </a>
            </li>
          ) : (
            ""
          )}

          {collection.wiki_url ? (
            <li>
              <a href={collection.wiki_url} target="_blank" rel="noreferrer">
                Wiki
              </a>
            </li>
          ) : (
            ""
          )}

          {collection.twitter_username ? (
            <li>
              <a
                href={"https://twitter.com/" + collection.twitter_username}
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    );
  }

  return <p className="no-collection">Your Collection Will Display Here</p>;
};
