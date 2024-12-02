import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './ShareButton.css';

/**
 * A button component that renders three social media buttons for sharing the
 * Wrapped feature on Twitter, LinkedIn, and Instagram.
 * @param {Object} data - An object with the following properties:
 *   - topArtistsRecent: An object containing the top 3 artists from the user's
 *     recent listening history. Has a single property, `items`, which is an
 *     array of objects with the following properties:
 *       - name: The name of the artist.
 *   - topTracksRecent: An object containing the top 3 tracks from the user's
 *     recent listening history. Has a single property, `items`, which is an
 *     array of objects with the following properties:
 *       - name: The name of the track.
 * @returns {JSX.Element} A component with three social media buttons.
 */
export const ShareButton = ({ data }) => {
  const shareUrl = process.env.REACT_APP_SITE_URL || window.location.origin;
  const shareTitle = "Check out my Spotify Wrapped!";

  /**
   * Opens a Twitter share modal with the Wrapped URL and a tweet with the
   * top 3 artists and tracks from the user's recent listening history.
   * @function
   */
  const handleTwitterShare = () => {
    const text = `${shareTitle}\n\nTop Artists:\n${data.topArtistsRecent.items.slice(0, 3).map(artist => artist.name).join(', ')}\n\nTop Tracks:\n${data.topTracksRecent.items.slice(0, 3).map(track => track.name).join(', ')}\n`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };


  /**
   * Opens a LinkedIn share window with the Wrapped URL.
   * @function
   */
  const handleLinkedInShare = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  /**
   * Opens an alert box with instructions to screenshot and share the
   * Wrapped on Instagram.
   */
  const handleInstagramShare = () => {
    alert('Screenshot your Wrapped and share it on Instagram!');
  };

  return (
    <div className="share-buttons-container">
      <div className="share-buttons">
        <button
          onClick={handleTwitterShare}
          className="share-button twitter"
          aria-label="Share on Twitter"
        >
          <FaTwitter size={24} />
        </button>
        
        <button
          onClick={handleLinkedInShare}
          className="share-button linkedin"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedin size={24} />
        </button>
        
        <button
          onClick={handleInstagramShare}
          className="share-button instagram"
          aria-label="Share on Instagram"
        >
          <FaInstagram size={24} />
        </button>
      </div>
    </div>
  );
}; 