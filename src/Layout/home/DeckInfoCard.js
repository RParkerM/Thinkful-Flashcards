import React from "react";
import { Link } from "react-router-dom";
import "./DeckInfoCard.css";
import classNames from "../../utils/class-names";

function DeckInfoCard({ name, description, id, cards, handleDeleteDeck }) {
  //Unicode for non-breaking space - used in skeleton layout only
  const nbsp = "\u00A0";

  //Only show cardlength if there is a cards property
  const cardLength = cards ? `${cards?.length} cards` : nbsp;

  //Show correct title if there is a name property, otherwise show skeleton animation
  const title = name ? (
    <h5 className='card-title '>{name}</h5>
  ) : (
    <h5 className='card-title animated-bg animated-bg-text'>{nbsp}</h5>
  );

  //Skeleton text before loading
  const skeletonText = <p className='animated-bg animated-bg-text'>{nbsp}</p>;
  const content = description ? (
    <p className='card-text'>{description}</p>
  ) : (
    <div className='card-text'>
      {skeletonText}
      {skeletonText}
    </div>
  );

  return (
    <div className='card my-1' key={id}>
      <div className='card-body'>
        <div className='deck-card-header'>
          {title}
          <p className='card-subtitle text-muted'>{cardLength}</p>
        </div>
        {content}
        <div className='deck-card-buttons'>
          <Link
            to={`/decks/${id}`}
            className={classNames({
              "btn btn-secondary": true,
              disabled: !name,
            })}
            aria-disabled={!name}
          >
            <i className='bi bi-eye-fill'></i> View
          </Link>
          <Link
            className={classNames({
              "btn btn-primary": true,
              disabled: !name,
            })}
            to={`/decks/${id}/study`}
            aria-disabled={!name}
          >
            <i className='bi bi-book'></i> Study
          </Link>
          <button
            className='btn btn-danger delete-deck'
            onClick={() => handleDeleteDeck(id)}
            aria-disabled={!name}
            disabled={!name}
          >
            <i className='bi bi-trash'></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeckInfoCard;
