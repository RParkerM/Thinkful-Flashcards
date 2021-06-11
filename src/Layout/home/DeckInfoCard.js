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
    description
  ) : (
    <>
      {skeletonText}
      {skeletonText}
    </>
  );

  return (
    <div className='card my-1' key={id}>
      <div className='card-body'>
        <div className='deck-card-header'>
          {title}
          <p className='card-subtitle text-muted'>{cardLength}</p>
        </div>
        <p className='card-text'>{content}</p>
        <div className='deck-card-buttons'>
          <Link
            to={`/decks/${id}`}
            className={classNames({
              btn: true,
              "btn-secondary": true,
              disabled: !name,
            })}
            aria-disabled={!name}
          >
            <i className='bi bi-eye-fill'></i> View
          </Link>
          <Link
            className={classNames({
              btn: true,
              "btn-primary": true,
              disabled: !name,
            })}
            to={`/decks/${id}/study`}
            aria-disabled={!name}
          >
            <i className='bi bi-book'></i> Study
          </Link>
          <button
            className={classNames({
              btn: true,
              "btn-danger": true,
              "delete-deck": true,
            })}
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
