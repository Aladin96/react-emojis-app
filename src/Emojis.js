import React, { Component } from "react";
const emojis = require("./emojisLabel.json").emojis;

class Emojis extends Component {
  appEmoji = (getEmoji, fontSize) => {
    return (
      <span role="img" aria-label={getEmoji.label} style={{ fontSize }}>
        {getEmoji.emoji}
      </span>
    );
  };

  // Render emoji by client ( custom emoji )
  customEmoji = (symbol, label, fontSize) => (
    <span role="img" aria-label={label} style={{ fontSize }}>
      {symbol}
    </span>
  );

  // Render Emoji as svg
  svgEmoji = (getEmoji, width) => (
    <img src={getEmoji.svg} alt={getEmoji.emoji} style={{ width }} />
  );

  // Render Emoji by its Unicode as SVG
  unicodeEmoji = (unicode, width) => (
    <img
      src={`https://twemoji.maxcdn.com/v/13.0.1/svg/${unicode}.svg`}
      alt={unicode}
      style={{ width }}
    />
  );

  render() {
    const {
      data,
      symbol,
      label = "custom Emoji",
      fontSize,
      width = "30px",
      svg = false,
      unicode,
    } = this.props;

    const getEmoji = emojis.filter((emoji) => emoji.id === data)[0];

    // Render The chosen emoji
    if (data && !svg) return this.appEmoji(getEmoji, fontSize);

    // Render The chosen emoji as SVG
    if (data && svg) return this.svgEmoji(getEmoji, width);

    // Render the custom emoji
    if (symbol) return this.customEmoji(symbol, label, fontSize);

    // Render Emoji by its Unicod as SVG
    if (unicode) return this.unicodeEmoji(unicode, width);
  }
}

export default Emojis;
